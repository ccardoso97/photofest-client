import { User } from "./user";

export interface Login {
  userName: string ;
  password: string;
}

export interface LoginResponse {
  token: string;
  user: User;
}
