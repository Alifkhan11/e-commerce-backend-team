import e from "express";
import { UserController } from "./auth.controller";
import validateRequest from "../../middleware/validateRequest";
import { UserCreatedValidation } from "./auth.validation";

const router = e.Router()


router.post(
    '/signup',
    validateRequest(UserCreatedValidation.userCreatedValidationSchema),
    UserController.userCreated
)
router.post(
    '/login',
    UserController.userLogin
)



export const AuthRouter = router