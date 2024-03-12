import  express from "express";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import { categoryController, createCategoryController, deleteCategoryController, singleCategoryController, updateCategoryController } from "../controllers/categoryController.js";

const router= express.Router();

//routes
//create category
router.route('/create-category').post(requireSignIn, isAdmin, createCategoryController);

//update category

router.route('/update-category/:id').put(requireSignIn, isAdmin, updateCategoryController);
//get all category
router.route('/get-category').get(categoryController);
//get single category
router.route('/single-category/:slug').get(singleCategoryController);
//delete category
router.route('/delete-category/:id').delete(requireSignIn, isAdmin, deleteCategoryController);
export default router;

