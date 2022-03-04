import {Constructor, EntityManager, EntityRepository} from "@mikro-orm/core";

export abstract class BaseRepository<T> {
    protected repository: EntityRepository<T>;

    protected constructor(private entity: Constructor<T>, em: EntityManager) {
        this.repository = em.getRepository<T>(this.entity);
    }

    async save(entity: T) {
        return this.repository.persistAndFlush(entity)
    }
}
