import { Request, RequestHandler } from 'express';
import { container } from 'tsyringe';

export function containerMiddleware(): RequestHandler {
  return (req: Request, res, next) => {
    req.container = container.createChildContainer();
    next();
  };
}
