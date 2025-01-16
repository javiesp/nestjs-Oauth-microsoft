// src/auth/token-validation.guard.ts
import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class TokenValidationGuard extends AuthGuard('token-validation') {}
