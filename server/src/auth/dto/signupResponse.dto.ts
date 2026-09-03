export interface SignupResponse {
  message: string;
  user: {
    uuid: string;
    name: string;
    email: string;
  };
}
