export interface User {
  id?: number;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  companyId: number;
}

export interface Company {
  id?: number;
  name: string;
}
