import dotenv from "dotenv";
dotenv.covfrg();

import jwt from "jsonwebtoken";

function signToken(payload){
    const token = jwt.sign(
        payload,
        process.env.TOKEN_SECRET,
        {
            expiresIn: process.env.TOKEN_EXPIRESIN,
            algorithm: "HS512",
            
        });
    return token;
}; 

function verifyToken(token) {
    try{
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        console.log(verified);
    }catch(error){
        console.error(error.message);
    }
};
export default {
    signToken,
    verifyToken,
};