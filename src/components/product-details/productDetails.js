import React, { Component, useState, useEffect } from 'react';
import Layout from '../../common/layout/layout';
import RatingStars from '../../common/star-rating/rating';
import { useParams } from 'react-router-dom';
import { getSingleProductByID } from '../../services/userData';


const ProductDetail = (props) => {
    // console.log('ID', productId);
    const [productData, setProductDetails] = useState({});
    const [isDataLoading, setDataLoadingState] = useState(false);
    const [showRating, setRatingtoShow] = useState(false);

    const { productId } = useParams();


    function getProductDetails() {
        if (productId) {
            getSingleProductByID(productId).then((res) => {
                setProductDetails(res.data);
                setDataLoadingState(false);
                setRatingtoShow(true);
            }).catch((e) => {
                console.log(e);
            })
        }
    }

    useEffect(() => {
        setDataLoadingState(true);
        getProductDetails();
    }, [])

    return (
        <Layout>
            <div className="content-head pt-3 pb-2 borderw-2">
                <h6 className="text-secondary">Product Details</h6>
            </div>
            {isDataLoading && <p className='text-info text-center py-3'>Details are loading...</p>}
            {!isDataLoading && <>
                <div className="col-12 my-3 product-detail-sec">
                    <div className="product-box p-3 d-flex">
                        <div className="product-imgbox d-flex align-items-center">
                            <img src={productData['image']} className="img-responsive" />
                        </div>
                        <div className="product-details ps-3 col">
                            <div className="product-categ-badge text-capitalize">{productData['category']}</div>
                            <div className="content pt-3">
                                <h5 className="title text-primary">{productData['title']}</h5>
                                <p className="detail text-secondary bold">{productData['description']}</p>
                                <h6 className="price-detail text-primary">$ {productData['price']} <span className="crossprice ms-1">{((productData['price'] * 0.1) + productData['price']).toFixed(2)}</span></h6>
                                {showRating && <RatingStars ratingcount={productData['rating'].rate} />}
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="col-12 my-3 product-detail-sec">
                    <div className="product-box p-3 d-flex">
                        <div className="product-imgbox d-flex align-items-center">
                            <img src='https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg' className="img-responsive" />
                        </div>
                        <div className="product-details ps-4 col">
                            <div className="product-categ-badge text-capitalize">Men's Clothing</div>
                            <div className="content pt-3">
                                <h5 className="title text-primary">Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops</h5>
                                <p className="detail text-secondary bold">Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday</p>
                                <h6 className="price-detail text-primary">$ {109.95} <span className="crossprice ms-1">{((109.95 * 0.1) + 109.95).toFixed(2)}</span></h6>
                                
                                <RatingStars ratingcount={3.4} />
                            </div>
                        </div>
                    </div>
                </div> */}
            </>
            }
        </Layout>
    )
}

export default ProductDetail;