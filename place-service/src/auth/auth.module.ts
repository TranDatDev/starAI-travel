import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';

@Module({
  imports: [
    PassportModule,
    JwtModule.register({
      secret: 'jwt-secret-key',
      signOptions: { expiresIn: '1d' },
    }),
  ],
  providers: [JwtStrategy],
})
export class AuthModule {}
