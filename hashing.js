import bcrypt from "bcrypt";
const db = [];

const signUp = async (user) => {
    const saltRounds =12;
    const salt = await bcrypt.genSalt(saltRounds);
    console.log("Salt", salt);

    const hashedSaltedPassword = await bcrypt.hash(user.password, salt);
    console.log("Hashed Salted Password: ", hashedSaltedPassword)
};

const logIn = async (user) => {
    
};

const testUser = {
    username: "ulaula",
    password: "ElvisPresly"
};
await signUp(testUser)