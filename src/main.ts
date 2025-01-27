import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';
import { FastifyReply } from 'fastify';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import fastifyCors from '@fastify/cors';  // Usando la versión adecuada de CORS para Fastify 4.x

dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(AppModule, new FastifyAdapter());
  const fastifyInstance = app.getHttpAdapter().getInstance();

  // Habilitar CORS para todas las rutas
  fastifyInstance.register(fastifyCors, {
    origin: '*',  // Permitir cualquier origen (puedes cambiarlo a un origen específico, ej. 'http://localhost:8081')
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
    allowedHeaders: ['Content-Type', 'Authorization'],
  });

  // Add hook to make Fastify compatible with Passport
  fastifyInstance.addHook('onRequest', (request, reply: FastifyReply, done) => {
    (reply as any).setHeader = function(key: string, value: string) {
      return reply.raw.setHeader(key, value);
    };
    (reply as any).end = function(data?: any) {
      if (data) {
        reply.send(data);
      } else {
        reply.raw.end();
      }
    };
    done();
  });

  // Swagger Options
  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Nest-js Swagger Example API')
    .setDescription('Swagger Example API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT ?? 3000, '0.0.0.0');
}

bootstrap();
