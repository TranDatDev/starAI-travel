import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
  Logger,
} from '@nestjs/common';

@Injectable()
export class OwnershipGuard implements CanActivate {
  private readonly logger = new Logger(OwnershipGuard.name);
  canActivate(context: ExecutionContext): boolean {
    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const paramId = request.params.id;

    // Nếu là ADMIN thì cho phép
    if (user.role === 'ADMIN') {
      this.logger.debug(`User ${user.id} is an ADMIN, access granted.`);
      return true;
    }

    // Nếu ID của user không trùng với paramId thì chặn
    if (user.id !== paramId) {
      this.logger.debug(
        `User ${user.id} is not the owner of params id ${paramId}.`,
      );
      throw new ForbiddenException('Access denied: not your resource');
    }

    this.logger.debug(
      `User ${user.id} is the confirmed owner of params id ${paramId}.`,
    );
    return true;
  }
}
