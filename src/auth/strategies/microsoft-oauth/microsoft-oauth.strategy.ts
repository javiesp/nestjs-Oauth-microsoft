import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-oauth2';
import axios from 'axios';

@Injectable()
export class MicrosoftOAuthStrategy extends PassportStrategy(Strategy, 'microsoft') {
  constructor() {
    super({
      authorizationURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/authorize',
      tokenURL: 'https://login.microsoftonline.com/common/oauth2/v2.0/token',
      clientID: process.env.MICROSOFT_CLIENT_ID,
      // Configurar como una aplicacion privada en azure AD
      // clientSecret: process.env.MICROSOFT_CLIENT_SECRET,
      callbackURL: process.env.MICROSOFT_CALLBACK_URL || 'http://localhost:3000/auth/microsoft/redirect',
      scope: ['openid', 'profile', 'email', 'User.Read'],
    });
  }

  async validate(accessToken: string, refreshToken: string): Promise<any> {
    try {
      // Fetch user details from Microsoft Graph API
      const { data } = await axios.get('https://graph.microsoft.com/v1.0/me', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      // Pass the user details to the controller
      return {
        ...data,
        accessToken,
        refreshToken,
      };
    } catch (error:any) {
      console.error('Error fetching user details:', error.response?.data || error.message);
      throw new UnauthorizedException('Failed to validate user');
    }
  }
}
