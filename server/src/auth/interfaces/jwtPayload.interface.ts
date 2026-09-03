export type JwtPayload = {
  sub: number; // The subject (User ID)
  email: string;
  rememberMe: boolean;
};
