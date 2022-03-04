import {PostgreSqlDriver} from "@mikro-orm/postgresql";
import {Options} from "@mikro-orm/core";
import {Book} from "../models/Book";

const mikroOrmConfig: Options<PostgreSqlDriver> = {
    entities: [
        Book
    ],
    host: '127.0.0.1',
    user: 'user',
    password: 'password',
    dbName: 'book_db',
    port: 5432,
    type: 'postgresql',

    forceUndefined: true,
    implicitTransactions: true,
};

export default mikroOrmConfig;
