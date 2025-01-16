import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthController } from './auth.controller';
// import { AuthService } from './auth.service';
import { MicrosoftOAuthStrategy } from './strategies/microsoft-oauth/microsoft-oauth.strategy';
import { TokenValidationGuard } from './strategies/microsoft-oauth/token-validation.guard'; 
import { TokenValidationStrategy } from './strategies/microsoft-oauth/token-validation.strategy'; 

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'microsoft' })],
  controllers: [AuthController],
  providers: [MicrosoftOAuthStrategy, TokenValidationGuard, TokenValidationStrategy],
})
export class AuthModule {}
