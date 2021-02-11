import expressJwt from "express-jwt";

export const requireSign = expressJwt({
    secret: process.env.JWT_SECRET,
    algorithms: ["HS256"]
})