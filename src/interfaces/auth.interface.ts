export interface IAuth {
  id: string;
  username: string;
  email: string;
  companyId: string;
  companyName: string;
}

export interface IAuthCredentials {
  username: string;
  password: string;
}
