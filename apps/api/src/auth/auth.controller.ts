import { Body, Controller, Get, HttpCode, HttpStatus, Post, Res, UseGuards } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import type { Response } from "express";
import { AuthService } from "./auth.service";
import { CurrentUser } from "./decorators/current-user.decorator";
import { LoginDto, SignupDto } from "./dto/index";
import { JwtAuthGuard } from "./jwt-auth.guard";

@Controller("auth")
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly configService: ConfigService,
  ) {}

  @Post("signup")
  async signup(@Body() dto: SignupDto, @Res({ passthrough: true }) res: any) {
    const response = res as Response;
    const { user, token } = await this.authService.signup(dto);
    this.setAuthCookie(response, token);
    return { message: "Account created successfully", user };
  }

  @Post("login")
  @HttpCode(HttpStatus.OK)
  async login(@Body() dto: LoginDto, @Res({ passthrough: true }) res: any) {
    const response = res as Response;
    const { user, token } = await this.authService.login(dto);
    this.setAuthCookie(response, token);
    return { message: "Logged in successfully", user };
  }

  @Post("logout")
  @HttpCode(HttpStatus.OK)
  logout(@Res({ passthrough: true }) res: any) {
    const response = res as Response;
    const cookieName = this.configService.get<string>("COOKIE_NAME", "hg_auth_token");
    response.clearCookie(cookieName, {
      httpOnly: true,
      secure: this.configService.get("COOKIE_SECURE") === "true",
      sameSite: this.configService.get<"lax" | "strict" | "none">("COOKIE_SAME_SITE", "lax"),
      path: "/",
    });
    return { message: "Logged out successfully" };
  }

  @Get("me")
  @UseGuards(JwtAuthGuard)
  async me(@CurrentUser() user: { id: string; email: string }) {
    return this.authService.getProfile(user.id);
  }

  private setAuthCookie(res: Response, token: string) {
    const cookieName = this.configService.get<string>("COOKIE_NAME", "hg_auth_token");
    const isSecure = this.configService.get("COOKIE_SECURE") === "true";
    const sameSite = this.configService.get<"lax" | "strict" | "none">("COOKIE_SAME_SITE", "lax");

    res.cookie(cookieName, token, {
      httpOnly: true,
      secure: isSecure,
      sameSite,
      path: "/",
      maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    });
  }
}
