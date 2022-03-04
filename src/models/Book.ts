import {Entity, PrimaryKey, Property} from "@mikro-orm/core";
import {ulid} from "ulid";

@Entity()
export class Book {
    @PrimaryKey()
    id = ulid();

    @Property()
    name!: string;

    @Property()
    author!: string;

    constructor(entity: Pick<Book, 'author' | 'name'>) {
        this.name = entity.name;
        this.author = entity.author;
    }
}
