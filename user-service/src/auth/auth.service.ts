import { Injectable, UnauthorizedException, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import * as bcrypt from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}

  async validateUser(
    email: string,
    password: string,
    superkey?: string,
    adminkey?: string,
  ) {
    const user = await this.userService.findByEmail(email);
    if (!user) {
      this.logger.warn(`Email not found: ${email}`);
      throw new UnauthorizedException('Email does not exist');
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      this.logger.warn(`Incorrect password for email: ${email}`);
      throw new UnauthorizedException('Invalid password');
    }

    // Enforce superkey / adminkey based on role
    if (user.role === 'MANAGER') {
      const superKeyConfig = this.config.get('SUPER_KEY');
      this.logger.debug('Attempt to login as ADMIN');

      if (superkey !== superKeyConfig) {
        this.logger.warn(`Invalid superkey for MANAGER: ${email}`);
        throw new UnauthorizedException('Invalid superkey');
      }
    }

    if (user.role === 'ADMIN') {
      const superKeyConfig = this.config.get('SUPER_KEY');
      const adminKeyConfig = this.config.get('ADMIN_KEY');

      this.logger.debug('Attempt to login as ADMIN');
      if (superkey !== superKeyConfig) {
        this.logger.warn(`Invalid super key for ADMIN: ${email}`);
        throw new UnauthorizedException('Invalid super key');
      }
      if (adminkey !== adminKeyConfig) {
        this.logger.warn(`Invalid admin key for ADMIN: ${email}`);
        throw new UnauthorizedException('Invalid admin key');
      }
    }

    const { password: _, ...result } = user;
    this.logger.log(
      `User authenticated successfully: ${email} (role: ${user.role})`,
    );
    return result;
  }

  async login(user: any) {
    const payload = { sub: user.id, email: user.email, role: user.role };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }

  async register(data: { email: string; password: string }) {
    const existing = await this.userService.findByEmail(data.email);
    if (existing) {
      this.logger.warn(`Email already exists: ${data.email}`);
      throw new UnauthorizedException('Email already exists');
    }

    const user = await this.userService.create(data as any);
    this.logger.log(`New user registered: ${data.email}`);
    return this.login(user);
  }
}
