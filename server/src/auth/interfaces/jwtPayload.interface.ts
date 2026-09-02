export interface JwtPayload {
  sub: number; // The subject (User ID)
  email: string;
  rememberMe: boolean;
}
