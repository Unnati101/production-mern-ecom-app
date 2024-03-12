import JWT from 'jsonwebtoken'
import userModel from '../models/userModel.js';

//protected routes token base 
export const requireSignIn = async (req, res, next) => {
    try {
        const decode = JWT.verify(
            req.headers.authorization,
             process.env.JWT_SECRET
             ); //encrypt
        req.user = decode;  //decrypt
        next();
    } catch (error) {
        console.log(error)
    }
};
//admin access
export const isAdmin = async (req, res, next) => {
    try {
        const user = await userModel.findById(req.user._id)
        if (user.role !== 1) { //if it is not admin as 0 means normal user and 1 for admin
            return res.status(401).send({
                success: false,
                message: "Unauthorized access",
            });
        } else {
            next();
        }
    } catch (error) {
        console.log(error)
        res.status(401).send({
            success: false,
            error,
            message: "Error in admin middleware",
        });

    }
};
