import {bookRoutes} from "./book.routes";
import {Router} from "express";

export const routes = () => {
    const router = Router();

    router.use(bookRoutes())

    return router;
}
