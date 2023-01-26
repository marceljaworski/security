import * as User from "../models/User.js";
import bcrypt from "bcrypt";


// export const getAll = async (req, res, next) => {
//     try {
//         const result = await User.getAll();
//         res.status(200).json(result);
//     } catch (error) {
//         next(error);
//     };
// };

export const login = async (req, res, next) => {
   
    try {
        const result = await User.getOne({email: req.body.email});
        console.log(req.body)
        const passwordIsEqual = await bcrypt.compare(req.body.password, result.password);
        console.log(passwordIsEqual);
        if(passwordIsEqual){
            res.status(201).json(result);
        }
    } catch(error) {
        next(error);
        // res.status(400).send({error: error.message});
    };
  
};