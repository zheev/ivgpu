import { Injectable } from "@nestjs/common";
import { Repository } from "typeorm";
import { LoadRepository } from "../LoadRepository";

@Injectable()
export class OrmService {

    repository;
    entity: any;

    public constructor(Entity: any) {
        this.entity = Entity;
        this.repository = LoadRepository.load(Entity);
    }

    public static instance(Entity: any): OrmService{
        return new this(Entity);
    }

    async findAll(): Promise<void> {
        return this.repository.find();
    }

    async findOne(id: number): Promise<void> {
        return this.repository.findOne(id);
    }

    async remove(id: number): Promise<void> {
        return this.repository.delete(id);
    }

    async create(createdData): Promise<Object> {

        const teacher = await this.repository.create();
    
        Object.assign(teacher, createdData);
    
        await this.repository.save(teacher);

        return createdData;
    }

}