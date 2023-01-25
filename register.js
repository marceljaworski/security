import bcrypt from "bcrypt";
import { promises as fs } from 'fs';

export const data = [];

const user1 = {
    username: "ulaula",
    password: "ElvisPresly"
};
const user2 = {
    username: "swing",
    password: "MichaelJackson"
};

const signUp = async ({username, password}) => {
    const saltRounds =10;
    const salt = await bcrypt.genSalt(saltRounds);
    console.log("Salt: ", salt);

    const hashedSaltedPassword = await bcrypt.hash(password, salt);
    console.log("Hashed Salted Password: ", hashedSaltedPassword);

    data.push({username: username, password: hashedSaltedPassword});
    console.log("Datenbank: ", data);
};

await signUp(user1);
await signUp(user2);
const logIn = async ({username, password}) => {
    const user = data.find(user => user.username == username);
    if(!user){
        console.log("Cannot find user");
        return
    } 
    try{
        const passwordCorrect = await bcrypt.compare(password, user.password);
        if(!passwordCorrect){
            console.log("User or Password not found... Please try again");
            return
        }else{
            console.log("Welkome ", username,"!");
            return user;
        };

    }catch{
        console.error("server error");
    }

    
};
const wrongUsername = {
    username: "swin",
    password: "Michaelackson"
};
const wrongPassword = {
    username: "swing",
    password: "Michaelackson"
};
await logIn(user1);
await logIn(wrongUsername);
await logIn(wrongPassword);
