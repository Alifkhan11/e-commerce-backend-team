import AppError from "../../error/appError";
import { TUser } from "./auth.interface";
import { User } from "./auth.model";
import httpStatus from "http-status";
import { createToken } from "./auth.utils";
import bcrypt from "bcrypt";

const userCreatedFromDB = async (data: TUser) => {
    const user = await User.findOne({ email: data.email });
    if (user) {
        throw AppError(httpStatus.BAD_REQUEST, "Email is already exist");
    }

    const password = await bcrypt.hash(data.password, 10);

    const newData = {
        ...data,
        password
    };

    const jwtPayloads = {
        email: data.email,
        role: data.role
    };

    const accessToken = createToken(jwtPayloads, process.env.JWT_SECRET as string, 100);

    const resualt = await User.create(newData);
    return {
        resualt,
        accessToken
    };
};

const loginUser = async (data: { email: string, password: string }) => {
    const user = await User.findOne({ email: data.email });
    if (!user) {
        throw AppError(httpStatus.BAD_REQUEST, "Email is not exist");
    }
    const isPasswordValid = await bcrypt.compare(data.password, user.password);
    if (!isPasswordValid) {
        throw AppError(httpStatus.BAD_REQUEST, "Password is not valid");
    }
    if (user.isDeleted) {
        throw AppError(httpStatus.BAD_REQUEST, "User is deleted");
    }

    const jwtPayloads = {
        email: user.email,
        role: user.role
    };
    const hours = 48;
    const expiresIn = 3600 * hours;
    const accessToken = createToken(jwtPayloads, process.env.JWT_SECRET as string, expiresIn);

    return {
        accessToken
    };
};

export const UserService = {
    userCreatedFromDB,
    loginUser
};