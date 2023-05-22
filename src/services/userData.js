import axios from "axios";
import { ENDPOINTS } from "../utilities/config";


export const getUserByUserId = async(userId)=>{
    const response = await axios.get(`${ENDPOINTS.singleUser}/${userId}`);
    return response
}

export const addNewUser = async(data)=>{
    const response = await axios.post(ENDPOINTS.registerNewUser, data);
    return response;
}

export const getProductList = async()=>{
    const response = await axios.get(ENDPOINTS.productList);
    return response;
}

export const getSingleProductByID = async(productId)=>{
    const response = await axios.get(`${ENDPOINTS.productList}/${productId}`);
    return response;
}
