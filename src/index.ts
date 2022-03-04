import "reflect-metadata"

import {Server} from "./infrastructure/server";
import {PostgreSqlDriver} from "@mikro-orm/postgresql";
import {MikroORM, EntityManager} from "@mikro-orm/core";
import mikroOrmConfig from "./infrastructure/mikroOrmConfig";
import {container} from "tsyringe";


export async function initializeMikroOrm(): Promise<MikroORM> {
    return MikroORM.init<PostgreSqlDriver>(mikroOrmConfig);
}

async function registerServices() {
    container.register(MikroORM, {useValue: await initializeMikroOrm()});
    container.register(EntityManager, {useValue: container.resolve(MikroORM).em});
}

(async function startServer() {
    try {
        await registerServices();
        Server.serve();
        console.info("Listening to port 3000")
    } catch (e) {
        console.error(e);
    }
})();
