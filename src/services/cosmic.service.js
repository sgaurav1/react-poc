import { bucket } from '../utilities/comsmic.config';

export const getProductsFromCosmicAPi = async () => {
    const response = await bucket.objects
        .find({
            type: "products",
        })
        .props("slug,title,metadata,content");
        return response;
}

export const getSingleProductsFromCosmicAPi = async(productSlug) => {
    const response = await bucket.objects
        .find({
            type: "products",
            slug: `${productSlug}`
        })
        .props("slug,title,metadata,content");
        return response;
}