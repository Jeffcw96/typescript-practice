import { Request, Response, NextFunction } from 'express'
import { AnyZodObject, Schema } from 'zod'

function validate(schema: AnyZodObject) {
    return function (req: Request, res: Response, next: NextFunction) {
        try {
            schema.parse({
                body: req.body,
                query: req.query,
                params: req.params
            })
        } catch (e: any) {
            return res.status(400).send(e.errors)
        }
    }
}

export default validate

