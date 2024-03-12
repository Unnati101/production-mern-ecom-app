import express from 'express'
import { forgotPasswordController, loginController, registerController, testController } from '../controllers/authController.js'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js';

//router object

const router = express.Router()


//routing
//REGISTER || METHOD POST
router.route('/register').post(registerController);

//LOGIN POST 
router.route('/login').post(loginController);
//forgot password || POST
router.route('/forgot-password').post(forgotPasswordController);

//test routes
router.get('/test', requireSignIn, isAdmin, testController); //two middlewares present isAdmin and requireSignIn
 
//protected user route auth dashboard
 router.get('/user-auth' ,requireSignIn, (req,res)=>{
    res.status(200).send({ok:true});
 });

 //protected admin route auth dashboard
 router.get('/admin-auth' ,requireSignIn, isAdmin, (req,res)=>{
   res.status(200).send({ok:true});
});

export default router;