import dotenv from "dotenv";
dotenv.config();

import jwt from "jsonwebtoken";

function signToken(payload) {
   
    const token = jwt.sign(
        payload,
        process.env.TOKEN_SECRET,
        {
            expiresIn: process.env.TOKEN_EXPIRESIN,
            algorithm: "HS512",
        });
    return token;
}


function verifyToken(token) {
    try {
        const verified = jwt.verify(token, process.env.TOKEN_SECRET);
        console.log(verified);
        return verified;
    } catch (error) {
        console.error(error.message);
    }
}
export default {
    signToken,
    verifyToken,
};
/**
 * I mplementiere JSON Web Tokens in deiner Galerie-App. Verwende entweder die beiden Funktionen aus dem Live-Coding oder schreibe deine eigenen zum Signieren und Verifizieren von JWT.
 * 
1. In welcher Datei/in welchem Verzeichnis legst du die zwei Funktionen am sinnvollsten ab?

2. Signiere nach dem Login einen JWT und sende ihn an den Client zurück. Du kannst ihn zunächst im Body zurücksenden.

3. Du möchtest die Endpoints unter /albums und /photos nur für angemeldete User nutzbar machen und dafür den JWT verwenden. Binde die Funktion zum Verifizieren passend ein. Du kannst den Token zunächst über den Request Body senden.
 */
// const payload = {
//     userId: 2,
//     name: "Marcel",
// };
// const token = signToken(payload);
// console.log(token);

// setTimeout(() => verifyToken(token), 2000);
