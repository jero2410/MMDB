export type SignupData = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

export type SigninData ={
    email: string;
  password: string;
  rememberMe: boolean
}

export type LoginResponse = {
  message: string;
  access_token: string;
  user: {
    id: number;
    name: string;
    email: string;
  };
};
