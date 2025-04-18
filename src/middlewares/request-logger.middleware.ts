import { Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger.util";

export const requestLogger = (req: Request, res: Response, next: NextFunction) => {
    const start = Date.now()

    res.on("finish", () => {
        const duration = Date.now() - start
        const message = `[${req.id}] ${req.method} ${req.originalUrl} ${res.statusCode} - ${duration}ms`;

        if (res.statusCode >= 500) {
            logger.error(message);
        } else if (res.statusCode >= 400) {
            logger.warn(message);
        } else {
            logger.http(message)
        }
    })
    
    next();
}