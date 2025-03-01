import queryBuilder from "../../Bilder/queryBilder";
import { TProducts } from "./products.interfatch";
import { Products } from "./products.model";

const productsCreateFromDB=async(data:TProducts)=>{
    const resualt=await Products.create(data);
    return resualt;
}

const productsGetFromDB=async(query:Record<string,unknown>)=>{
    const modelQuery = Products.find();
    const queryBilder = await queryBuilder(modelQuery, query)
        .search(['name', 'category', 'description'])
        .filter()
        .sort()
        .paginate()
        .fields();

        const meta = await queryBilder.countTotal();
        const data = await queryBilder.modelQuery;
        return { data, meta };
}

export const ProductsService={
    productsCreateFromDB,
    productsGetFromDB
};