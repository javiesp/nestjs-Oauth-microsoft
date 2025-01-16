import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-custom';
import axios from 'axios';

@Injectable()
export class TokenValidationStrategy extends PassportStrategy(Strategy, 'token-validation') {
  constructor() {
    super();
  }

  async validate(req: any): Promise<any> {
    try {
      const authHeader = req.headers.authorization;
      
      if (!authHeader || !authHeader.startsWith('Bearer ')) {
        throw new UnauthorizedException('No bearer token provided');
      }

      const accessToken = authHeader.split(' ')[1];

      if (!accessToken) {
        throw new UnauthorizedException('Token not provided');
      }

      // Validate the token by making a request to Microsoft Graph API
      const { data } = await axios.get('https://graph.microsoft.com/v1.0/me', {
        headers: { Authorization: `Bearer ${accessToken}` },
      });

      if (!data) {
        throw new UnauthorizedException('Invalid or expired token');
      }

      // Return the user data if validation is successful
      return data;
    } catch (error) {
      console.error('Token validation error:', error);
      throw new UnauthorizedException('Failed to validate token');
    }
  }
}