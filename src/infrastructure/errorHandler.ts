import { ErrorRequestHandler } from 'express';
import ClientError from "@/infrastructure/ClientError";
import InternalServerError from "@/infrastructure/InternalServerError";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandlerMiddleware: ErrorRequestHandler = (err, req, res, next) => {

  const publicError = getPublicError(err);

  return res.status(publicError.status).json({
    code: publicError.code,
    message: publicError.message,
  });
};

function getPublicError(error: unknown): { status: number; message: string; code: string } {
  if (error instanceof ClientError) {
    return error;
  }

  return new InternalServerError();
}

function stringifyError(error: unknown): string {
  if (error instanceof Error) {
    return error.stack || error.message;
  }

  return String(error);
}

export default errorHandlerMiddleware;
