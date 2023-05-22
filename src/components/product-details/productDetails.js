import React, { Component, useState, useEffect } from 'react';
import Layout from '../../common/layout/layout';
import RatingStars from '../../common/star-rating/rating';
import { useParams } from 'react-router-dom';
import { getSingleProductByID } from '../../services/userData';
import { useSearchParams } from 'react-router-dom';
import useSWR from "swr";
import { getSingleProductsFromCosmicAPi } from '../../services/cosmic.service';
import {
    Magnifier,
    GlassMagnifier,
    SideBySideMagnifier,
    PictureInPictureMagnifier,
    MOUSE_ACTIVATION,
    TOUCH_ACTIVATION
} from "react-image-magnifiers";


const ProductDetail = (props) => {
    // console.log('ID', productId);
    const [productData, setProductDetails] = useState({});
    const [isDataLoading, setDataLoadingState] = useState(true);
    const [showRating, setRatingtoShow] = useState(false);
    const [onMobileDevice, setMobileDevice] = useState(false)
    const { productId } = useParams();
    const [searchParams, setsearchParams] = useSearchParams();
    const productSlug = searchParams.get('productSlug');
    // console.log(productDetails);

    async function getProductDetails() {
        if (productId) {
            getSingleProductByID(productId).then((res) => {
                setProductDetails(res.data);
                setDataLoadingState(false);
                setRatingtoShow(true);
            }).catch((e) => {
                console.log(e);
            })
        } else if (productSlug) {
            getSingleProductsFromCosmicAPi(productSlug).then(res => {
                setProductDetails(res.objects[0]);
                setDataLoadingState(false);
            });
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
                <div className='row'>
                    <div className='col-4'>

                    </div>
                    <div className="col-12 my-3 product-detail-sec">

                        <div className="product-box p-3 d-flex flex-wrap justify-content-center">
                            <div className='col-md-4'>
                                <SideBySideMagnifier
                                    className="input-position"
                                    imageSrc={productData['image'] || productData['metadata'].image.imgix_url}
                                    imageAlt='product-img'
                                    onImageLoad={() => console.log('loading image')}
                                    onLargeImageLoad={() => console.log('loading large image')}
                                    switchSides={true}
                                    zoomContainerBorder='2px solid #0d6efd'
                                    fillAvailableSpace={false}
                                    fillGapRight={10}
                                    overlayBackgroundColor='#eaf2ff'
                                />
                            </div>
                            <div className="product-details pt-4 pt-md-0 ps-3 col-md-8">
                                {productData['category'] && <div className="product-categ-badge text-capitalize">{productData['category'] || ''}</div>}
                                <div className="content pt-3">
                                    <h5 className="title text-primary">{productData['title']}</h5>
                                    {productData['description'] && <p className="detail text-secondary bold">{productData['description'] || ''}</p>}
                                    <h6 className="price-detail text-primary">Price: $ {productData['price'] || productData['metadata'].price} {productData['price'] && <span className="crossprice ms-1">{((productData['price'] * 0.1) + productData['price']).toFixed(2)}</span>}</h6>
                                    {showRating && <RatingStars ratingcount={productData['rating'].rate} />}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
            }
        </Layout>
    )
}

export default ProductDetail;