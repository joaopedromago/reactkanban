import { getRepository } from "typeorm";
import { NextFunction, Request, Response } from "express";
import { Card } from "../entity/Card";

export class CardController {

    private cardRepository = getRepository(Card);

    async all(request: Request, response: Response, next: NextFunction) {
        return this.cardRepository.find();
    }

    async one(request: Request, response: Response, next: NextFunction) {
        return this.cardRepository.findOne(request.params.key);
    }

    async save(request: Request, response: Response, next: NextFunction) {
        return this.cardRepository.save(request.body);
    }

    async remove(request: Request, response: Response, next: NextFunction) {
        let userToRemove = await this.cardRepository.findOne(request.params.key);
        await this.cardRepository.remove(userToRemove);
    }

}