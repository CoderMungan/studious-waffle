export interface User {
  id?: number;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
  companyId: number | null;
}

export interface CompanyInterface {
  id?: number;
  name: string;
}
