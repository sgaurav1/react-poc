import React from "react";
import useSWR from "swr";
import Cosmic from "cosmicjs";
import Layout from "../../common/layout/layout";
import { Link } from "react-router-dom";
import { getProductsFromCosmicAPi } from "../../services/cosmic.service";

const ProductsFromCosmic = (props) => {
    const { data, error } = useSWR("fetch-products", getProductsFromCosmicAPi); // Use SWR hook
    if (!data) return <div>Loading...</div>;
    const posts = data.objects;
    return (
        <Layout>
            <table className="table table-striped text-center">
                <thead>
                    <tr>
                        <td>#</td>
                        <td>Product Title</td>
                        <td>Image</td>
                    </tr>
                </thead>

                <tbody>
                    {posts.map((item, index) => (
                        <tr key={item.slug}>
                            <td>{index + 1}</td>
                            <td><Link to={`/productDetails?productSlug=${item.slug}`}>{item.title}</Link></td>
                            {/* <td><p className="text-success cursor-pointer" onClick={()=> navigateToDetailsPage(item)}>{item.title}</p></td> */}
                            <td><img src={item.metadata.image.imgix_url} style={{ maxWidth: '30px' }} /></td>
                            <td>{item.content}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    )
}

export default ProductsFromCosmic;