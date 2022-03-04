declare namespace Express {
  interface Request {
    container: import('tsyringe').DependencyContainer;
  }
}

export class ErrorRequestHandler {
}
