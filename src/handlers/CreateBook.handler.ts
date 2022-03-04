import {Request, Response} from 'express'
import {injectable} from "tsyringe";
import {BookRepository} from "../repositories/BookRepository";
import {CreateBookHandlerRequest} from "./CreateBookRequest";
import {Book} from "../models/Book";


@injectable()
export class CreateBookHandler {
    constructor(private bookRepository: BookRepository) {
    }

    async handle(request: CreateBookHandlerRequest): Promise<Book> {
        const book = new Book(request);

        await this.bookRepository.save(book);

        return book
    }
}
