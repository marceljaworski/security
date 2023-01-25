import bcrypt from "bcrypt";

const logIn = async (user) => {
    const result = db.find(user => user.username == username);
    if(!result) console.log("user not found");
    console.log(user);
};

const testUser = {
    username: "ulaula",
    password: "ElvisPresly"
};
const newUser = {
    username: "swing",
    password: "Michael Jackson"
};
await signUp(testUser);
await signUp(newUser);
await logIn(testUser);