import { getRepository } from 'typeorm';

export class LoadRepository {
    static async load(Entity: any){
        return await getRepository(Entity);
    }
}