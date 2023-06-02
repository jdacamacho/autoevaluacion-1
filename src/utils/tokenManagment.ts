import { User } from "../models/User";
import jwt from "jsonwebtoken"

export const tokenSign = async(user: User) => {

    const payload = {
        _id: user.id,
        roles: user.roles
    };

    return jwt.sign(
        payload,
        process.env.JWT_SECRET,
        { expiresIn: "2h" }
    );
}