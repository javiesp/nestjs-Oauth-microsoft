import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  // Initiates Microsoft login flow
  @Get('login')
  @UseGuards(AuthGuard('microsoft'))
  async login(): Promise<void> {
    // Triggers the Microsoft OAuth login
  }

  // Callback route for handling Microsoft login
  @Get('microsoft/redirect')
  @UseGuards(AuthGuard('microsoft'))
  async microsoftRedirect(@Req() req, @Res() res): Promise<any> {
    const user = req.user; // Comes from the `validate` method in the strategy
    console.log('Authenticated User:', user);

    // Respond with user data or redirect to the frontend   
    return res.status(200).json({
      message: 'Login successful',
      user,
    });
  }

  @UseGuards(AuthGuard('token-validation'))
  @Get('/health')
  getHello(): string {
    return 'It works !!!';
  }
}
