import {Request, Response, Router} from "express";
import {container} from "tsyringe";
import {CreateBookHandler} from "../handlers/CreateBook.handler";
import {CreateBookHandlerRequest} from "../handlers/CreateBookRequest";
import {plainToClass} from "class-transformer";
import {validate} from "class-validator";


export const bookRoutes = () => {
    const router = Router();

    const createBookController = container.resolve(CreateBookHandler)

    router.post('/book', async (req, res, next) => {
        const requestDto: Record<string, unknown> = {};
        console.log(req.body);
        Object.keys(req.body).forEach((propertyKey: string) => {
            requestDto[propertyKey] = req.body[propertyKey];
        });

        const request = plainToClass(CreateBookHandlerRequest, requestDto, {enableImplicitConversion: true});
        await validate(request);

        const book = await createBookController.handle(req.body)

        res.send(book);
    })

    return router;

}
