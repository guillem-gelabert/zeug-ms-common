import { Request, Response } from "express";
import { CustomError } from "../errors";

export const errorHandler = (
  err: Error,
  _: Request,
  res: Response,
) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).send({ errors: err.serializeErrors() });
    return;
  }

  console.error(err);
  res.status(400).send({
    errors: [
      {
        message: "Something went wrong",
      },
    ],
  });
};
