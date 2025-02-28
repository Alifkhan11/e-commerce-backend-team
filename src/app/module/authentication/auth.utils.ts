import jwt from 'jsonwebtoken';

export const createToken = (
    jwtPayloads: { email: string; role: string },
    secret: string,
    expiresIn: number
) => {
    return jwt.sign(jwtPayloads, secret, { expiresIn });
};

export const verifyToken = (token: string, secret: string) => {
    return jwt.verify(token, secret);
}