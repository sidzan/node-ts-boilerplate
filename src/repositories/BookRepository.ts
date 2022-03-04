import {BaseRepository} from "./BaseRepository";
import {Book} from "../models/Book";
import {EntityManager} from "@mikro-orm/core";
import {singleton} from "tsyringe";

@singleton()
export class BookRepository extends BaseRepository<Book> {
    constructor(em: EntityManager) {
        super(Book, em);
    }

}
