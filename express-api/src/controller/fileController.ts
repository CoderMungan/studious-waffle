import { Request, Response } from "express";

const fileController = async (req: Request, res: Response): Promise<void> => {
  console.log("body: ", req.body, "file: ", req.file);
};

export default { fileController };
