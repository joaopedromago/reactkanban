import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { KanbanColumn as Column } from "../entity/Column";

export class ColumnController {

    private columnRepository = getRepository(Column);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.columnRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.columnRepository.findOne(request.params.key);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.columnRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.columnRepository.findOne(request.params.key);
        await this.columnRepository.remove(userToRemove);
    }

}