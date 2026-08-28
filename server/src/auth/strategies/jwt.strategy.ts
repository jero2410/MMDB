import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { JwtPayload } from '../interfaces/jwtPayload.interface';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    const jwtSecret = process.env.JWT_SECRET;

    if (!jwtSecret) {
      throw new Error('JWT_SECRET environment variable is missing.');
    }

    super({
      // Extract JWT from the Authorization header as a Bearer token
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

      // Reject tokens that have passed their expiration date
      ignoreExpiration: false,

      // The secret key used to sign the token (keep this safe in environment variables)
      secretOrKey: jwtSecret,
    });
  }

  // Passport automatically decodes the token payload and passes it here
  validate(payload: JwtPayload) {
    // Whatever is returned here is injected into the Request object as req.user
    return { userId: payload.sub, userEmail: payload.email };
  }
}
