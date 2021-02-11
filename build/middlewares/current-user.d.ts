import { Request, Response, NextFunction } from "express";
interface UserPayload {
    id: string;
    user: string;
}
declare global {
    namespace Express {
        interface Request {
            currentUser?: UserPayload;
        }
    }
}
export declare const currentUser: (req: Request, _: Response, next: NextFunction) => void;
export {};
