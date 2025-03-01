import e from "express";
import validateRequest from "../../middleware/validateRequest";
import { ProductsValidation } from "./products.validation";
import { ProductsController } from "./products.controller";

const router=e.Router();


router.post(
    '/',
    validateRequest(ProductsValidation.productsCreateValidationSchema),
    ProductsController.createProducts
)

router.get(
    '/',
    ProductsController.getProducts
);

export const ProductsRought=router;