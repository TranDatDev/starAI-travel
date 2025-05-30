import { Injectable, Logger } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  private readonly logger = new Logger(JwtStrategy.name);

  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'jwt-secret-key',
    });
    this.logger.debug('JwtStrategy initialized');
  }

  async validate(payload: any) {
    this.logger.debug(`Validating payload: ${JSON.stringify(payload)}`);
    return {
      id: payload.sub,
      email: payload.email,
      role: payload.role,
      theme: payload.theme,
      language: payload.language,
    };
  }
}
