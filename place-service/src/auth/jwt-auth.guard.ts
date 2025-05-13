import { Injectable, Logger, UnauthorizedException } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  private readonly logger = new Logger(JwtAuthGuard.name);

  handleRequest(err: any, user: any, info: any, context: any) {
    if (!user) {
      this.logger.error('no access token');
      throw new UnauthorizedException('No access token provided');
    }
    this.logger.debug('Checking authentication...');
    return super.handleRequest(err, user, info, context);
  }
}
