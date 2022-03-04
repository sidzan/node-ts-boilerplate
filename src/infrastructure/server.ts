import express from "express";
import {Request, Response} from "express";
import http from "http";
import {container} from "tsyringe";
import {routes} from "../routes";
import {mikroOrmMiddleware} from "./mikroOrm";
import {containerMiddleware} from "./container";
import errorHandlerMiddleware from "@/infrastructure/errorHandler";

export class Server {
    server: http.Server;
    app = express();

    constructor() {
        this.app.use("/health-check", (req: Request, res: Response) =>
            res.sendStatus(200)
        );

        this.app.use(express.json({ limit: '10mb' }))
            .use(containerMiddleware())
            .use(mikroOrmMiddleware())
            .use(routes())
            .use(errorHandlerMiddleware);
        this.server = http.createServer(this.app);
    }

    static serve() {
        return container.resolve(Server).server.listen(3000);
    }

}
