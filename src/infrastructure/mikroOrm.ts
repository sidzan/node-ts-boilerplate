import { MikroORM, RequestContext } from '@mikro-orm/core';
import { RequestHandler } from 'express';
import { container } from 'tsyringe';

export function mikroOrmMiddleware(): RequestHandler {
  return async (req, res, next) => {
    // Fork entity manager to get a clean identity map for each request.
    RequestContext.create(container.resolve(MikroORM).em, next);
  };
}
