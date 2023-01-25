import bcrypt from "bcrypt";
const db = [];


const signUp = async (user) => {
    const saltRounds =12;
    const salt = await bcrypt.genSalt(saltRounds);
    console.log("Salt: ", salt);

    const hashedSaltedPassword = await bcrypt.hash(user.password, salt);
    console.log("Hashed Salted Password: ", hashedSaltedPassword);

    db.push({username: user.username, password: hashedSaltedPassword});
    console.log("Datenbank: ", db);
};