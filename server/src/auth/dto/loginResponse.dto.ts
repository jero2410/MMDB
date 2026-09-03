export interface LoginResponse {
  message: string;
  access_token: string;
  user: {
    uuid: string;
    name: string;
    email: string;
  };
}
