import express from 'express'
import { isAdmin, requireSignIn } from '../middlewares/authMiddleware.js'
import { createProductController,
   deleteProductController,
    getProductController,
     getSingleProductController, 
     productCountController, 
     productFiltersController,
      productListController,
       productPhotoController,
        relatedProductController,
        searchProductController,
        updateProductController }
         from '../controllers/productController.js';
import formidable from 'express-formidable'


const router = express.Router()


//routes
router.route('/create-product')
  .post(requireSignIn,
    isAdmin, formidable(),
    createProductController);

router.route('/update-product/:pid')
  .put(requireSignIn,
    isAdmin, formidable(),
    updateProductController);

//get products
router.route('/get-product').get(getProductController);

//get singlr product
router.route('/get-product/:slug').get(getSingleProductController);

//get photo
router.route('/product-photo/:pid').get(productPhotoController);

//delete product
router.route('/product/:pid').delete(deleteProductController);

//filter product
router.route('/product-filters').post(productFiltersController);

//product count
router.route('/product-count').get(productCountController);

//product per page
router.route('/product-list/:page').get(productListController);

//search bar
router.route('/search/:keyword').get(searchProductController);

//similar product
router.route('/related-product/:pid/:cid').get(relatedProductController);
export default router;