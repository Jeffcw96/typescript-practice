import { DocumentDefinition } from 'mongoose'
import UserModel, { UserDocument } from '../models/user.model';
import { omit } from "lodash";

export async function createUser(input: DocumentDefinition<Omit<UserDocument, "createdAt" | "updatedAt" | "comparePassword">>) {
    try {
        const user = await UserModel.create(input)

        return omit(user.toJSON(), "password");
    } catch (error: any) {
        throw new Error(error)
    }
}