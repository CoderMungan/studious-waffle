import aws from "aws-sdk";

import { SequelizeOptions } from "sequelize-typescript";

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

export interface Config {
  database: {
    development: SequelizeOptions;
    test: SequelizeOptions;
    production: SequelizeOptions;
  };
  s3: any;
  express: {
    baseUri: string;
    port: number | string;
    apiPrefix: string;
  };
  cors: {
    disable: boolean;
    origin: string;
    credentials: boolean;
  };
  bucketName: string;
  isDev: boolean;
  isProd: boolean;
}
