import { Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import axios from 'axios';
import { FastifyReply } from 'fastify';

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
    const user = req.user;
    console.log('Authenticated User:', user);
  
    return res.status(200).send({
      message: 'Login successful',
      user,
    });
  }

  // Server-side logout
  @UseGuards(AuthGuard('token-validation'))
  @Post('logout')
  async logout(@Req() req, @Res() res: FastifyReply): Promise<any> {
    try {
      const authHeader = req.headers.authorization;
      const accessToken = authHeader.split(' ')[1];

      // Revoke the access token with Microsoft
      await axios.post(
        'https://login.microsoftonline.com/common/oauth2/v2.0/logout',
        {},
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      // Clear any session data if you're using sessions
      if (req.session) {
        req.session.destroy();
      }

      return res.status(200).send({
        message: 'Logged out successfully',
      });
    } catch (error) {
      console.error('Logout error:', error);
      return res.status(500).send({
        message: 'Error during logout',
        error: error,
      });
    }
  }

  // Client-side logout redirect
  @Get('logout-redirect')
  clientLogout(@Res() res: FastifyReply): void {
    const microsoftLogoutUrl = `https://login.microsoftonline.com/common/oauth2/v2.0/logout?post_logout_redirect_uri=${encodeURIComponent(
      process.env.POST_LOGOUT_REDIRECT_URI || 'http://localhost:3000'
    )}`;
    
    res.redirect(302, microsoftLogoutUrl);
  }

  // @UseGuards(AuthGuard('token-validation'))
  @Get('/health')
  getHello(): string {
    return 'It works !!!';
  }
}