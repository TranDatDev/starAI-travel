import { Controller, Post, Body, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
@Controller({ path: '/auth', version: '1' })
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(
    @Body()
    body: {
      email: string;
      password: string;
      superkey?: string;
      adminkey?: string;
    },
  ) {
    const user = await this.authService.validateUser(
      body.email,
      body.password,
      body.superkey,
      body.adminkey,
    );
    return this.authService.login(user);
  }

  @Post('register')
  async register(@Body() body: { email: string; password: string }) {
    return this.authService.register(body);
  }
}
