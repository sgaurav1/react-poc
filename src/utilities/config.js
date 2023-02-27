
const apiUrl = 'https://reqres.in/api';
const apiUrlJSONplacholder = 'https://jsonplaceholder.typicode.com';
const productsApi = 'https://fakestoreapi.com'
export const ENDPOINTS = {
    auth: `${apiUrl}/login`,
    singleUser: `${apiUrl}/users`,
    userList: `${apiUrlJSONplacholder}/users`,
    posts: `${apiUrl}/posts`,
    registerNewUser: `${apiUrl}/register`,
    productList: `${productsApi}/products`
}