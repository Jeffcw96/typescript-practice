import jwt from "jsonwebtoken";
import config from "config";

const secretKey = Buffer.from(
    config.get<string>("secretKey"),
    "base64"
).toString("ascii");

export function signJwt(object: Object, type: String) {
    let tokenLifeTime = "15m"

    switch (type) {
        case 'ACCESS_TOKEN':
            tokenLifeTime = config.get("accessTokenTtl")
            break
        case 'REFRESH_TOKEN':
            tokenLifeTime = config.get("refreshTokenTtl")
            break
    }

    const token = jwt.sign(object, secretKey, {
        algorithm: "HS256",
        expiresIn: tokenLifeTime
    });

    return token
}

export function verifyJwt(token: string) {
    try {
        const decoded = jwt.verify(token, secretKey);
        return {
            valid: true,
            expired: false,
            decoded,
        };
    } catch (e: any) {
        console.error(e);
        return {
            valid: false,
            expired: e.message === "jwt expired",
            decoded: null,
        };
    }
}