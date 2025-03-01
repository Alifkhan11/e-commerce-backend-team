import { Router } from "express";
import { AuthRouter } from "../module/authentication/auth.rought";
import { ProductsRought } from "../module/products/products.rought";

const router = Router()

const moduleRought = [
    {
        path: '/auth',
        route: AuthRouter
    },
    {
        path:'/product',
        route:ProductsRought
    }
]

moduleRought.forEach((route) => router.use(route.path, route.route))

export const Routers = router