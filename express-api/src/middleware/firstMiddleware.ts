import { Request, Response, NextFunction } from "express";

const firstMiddleWare = (
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  console.log("firstMiddleware");
  next();
};

export default firstMiddleWare;
