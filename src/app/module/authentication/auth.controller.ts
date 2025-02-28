import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { UserService } from "./auth.service";
import httpStatus from 'http-status'

const userCreated = catchAsync(async (req, res) => {
    const {resualt,accessToken} = await UserService.userCreatedFromDB(req.body);
    sendResponse(res, {
        statusCode: httpStatus.CREATED,
        success: true,
        message: "User Created successfully",
        data: {
            resualt,
            accessToken
        }
    })
})


const userLogin=catchAsync(async (req, res) => {
    const {accessToken}=await UserService.loginUser(req.body)
    sendResponse(res,{
        statusCode: httpStatus.OK,
        success:true,
        message:'User Loged In Sussessfully',
        data:{
            accessToken
        }
    })
})

export const UserController = {
    userCreated,
    userLogin
}