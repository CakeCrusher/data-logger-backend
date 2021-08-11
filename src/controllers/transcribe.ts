import { fetchGraphQL } from "../helperFunctions";

import { Request, Response } from "express";

export const transcribe = async (
  req: Request,
  res: Response
): Promise<any> => {
  
  return res.json({
    status: 200,
  });
};
