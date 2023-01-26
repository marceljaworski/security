import bcrypt from "bcrypt";
import * as User from "../models/User.js";


// export const getAll = async (req, res, next) => {
//     try {
//         const result = await User.getAll();
//         res.status(200).json(result);
//     } catch (error) {
//         next(error);
//     };
// };

export const create = async (req, res, next) => {
    const hashedPassword = await bcrypt.hash(req.body.password, 10)
    try {
        const result = await User.create({email: req.body.email, password: hashedPassword});
        console.log(req.body)
        res.status(201).json(result);
    } catch(error) {
        next(error);
    };
  
};

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
    };
  
};
// export const getOne = async (req, res, next) => {
//     try {
//         const result = await User.getOne(req.params.UserId);
//         res.status(200).json(result);
//     } catch(error) {
//         next(error);
//     };
// }
// export const replace = async (req, res, next) => {
//     try {
//         const result = await User.replace(req.params.UserId, req.body)
//         res.status(201).json(result);
//     }catch(error) {
//         next(error);
//     };
// };
// export const update = async (req, res, next) => {
//     if (Object.keys(req.body).length === 0) {
//         res.status(204).send();
//         return
//     }
//     try {
//         const result = await User.update(req.params.UserId, req.body);
//         res.status(201).json(result);
//     }catch(error) {
//         next(error);
//     }; 
// };
// export const deleteOne = async (req, res, next) => {
//     try{
//         const result = await User.deleteOne(req.params.UserId);
//         if(result.deletedCount > 0) return res.status(204).end();
//     }catch(error) {
//         next(error);
//     };
// };
