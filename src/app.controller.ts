import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AppService } from './app.service';

@Controller()
@UseGuards(AuthGuard())
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/getHello')
  getHello(): string {
    return this.appService.getHello();
  }
}
