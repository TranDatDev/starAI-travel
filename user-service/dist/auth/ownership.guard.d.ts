import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class OwnershipGuard implements CanActivate {
    private readonly logger;
    canActivate(context: ExecutionContext): boolean;
}
