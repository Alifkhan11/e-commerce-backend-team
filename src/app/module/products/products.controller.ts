import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ProductsService } from "./products.service";
import httpStatus from "http-status"

const createProducts=catchAsync(async(req,res)=>{
    const resualt=await ProductsService.productsCreateFromDB(req.body)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"create product success",
        data:resualt
    })
})

const getProducts=catchAsync(async(req,res)=>{
    const query=req.query
    const resualt=await ProductsService.productsGetFromDB(query)
    sendResponse(res,{
        statusCode:httpStatus.OK,
        success:true,
        message:"get all product success",
        data:resualt.data,
        meta:resualt.meta
    })
}
)

export const ProductsController={
    createProducts,
    getProducts
}