import React, { useEffect, useState, Component } from "react";
import Layout from "../../common/layout/layout";
import { getProductList } from "../../services/userData";
import ReactPaginate from 'react-paginate';
import RatingStars from "../../common/star-rating/rating";
import { Link } from "react-router-dom";


class ProductList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            productList: [],
            numberOfItemsPerPage: 4,
            itemsToShow: [],
            numberOfPages: 0,
            itemOffset: 0,
            totalItemsLength: 0,
            isLoading: true
        }
    }

    static getDerivedStateFromProps(props, state) {
        return function () {
            this.loadPagnation();
        }
    }

    componentDidMount() {
        getProductList().then((res) => {
            if (res) {
                this.setState({ productList: res.data }, () => {
                    this.loadPagnation();
                    this.setState({ isLoading: false })
                })
            }
        })
    }

    loadPagnation() {
        // debugger;
        const endOffset = this.state.itemOffset + this.state.numberOfItemsPerPage;
        let pageCount = Math.ceil(this.state.productList.length / this.state.numberOfItemsPerPage);
        const currentItems = this.state.productList.slice(this.state.itemOffset, endOffset);
        this.setState({ totalItemsLength: this.state.productList.length, numberOfPages: pageCount, itemsToShow: currentItems })
    }

    handlePageClick(event) {
        const newOffset = (event.selected * this.state.numberOfItemsPerPage) % this.state.totalItemsLength;
        this.setState({ itemOffset: newOffset }, () => {
            this.loadPagnation();
        });
    }

    changeNumberOfProductsToShow(event) {
        this.setState({ numberOfItemsPerPage: parseInt(event.target.value) }, () => {
            this.loadPagnation()
        });
    }

    render() {
        return (
            <Layout>
                <div className="content-head pt-3 pb-2 borderw-2 d-flex productlist-head align-items-center">
                    <h6 className="text-secondary">Products List</h6>
                    <div className="form-group ms-auto d-flex col-8 col-md-6 align-items-center justify-content-end mb-2">
                        <label className="mb-0">Show items per page</label>
                        <select className="form-control" onChange={(event) => this.changeNumberOfProductsToShow(event)}>
                            <option>2</option>
                            <option>3</option>
                            <option selected>4</option>
                            <option>5</option>
                        </select>
                    </div>
                </div>
                <div className="produts-sec py-3 mb-4">
                    {this.state.isLoading && <p className="text-center text-info">Data is loading...</p>}
                    {!this.state.isLoading && <>
                        <div className="row">
                            {this.state.itemsToShow.map((item, i) => (
                                <div className="col-lg-6 mb-3" key={item['id']}>
                                    <Link to={`/productDetails/${item['id']}`} className='text-decoration-none'>
                                        <div className="product-box p-3 d-flex">
                                            <div className="product-imgbox d-flex align-items-center">
                                                <img src={item['image']} className="img-responsive" />
                                            </div>
                                            <div className="product-details ps-3 col">
                                                <div className="product-categ-badge text-capitalize">{item['category']}</div>
                                                <div className="content pt-3">
                                                    <h5 className="title text-primary">{item['title']}</h5>
                                                    <p className="detail text-secondary bold">{item['description'] + '...'}</p>
                                                    <h6 className="price-detail text-primary">$ {item['price']} <span className="crossprice ms-1">{((item['price'] * 0.1) + item['price']).toFixed(2)}</span></h6>
                                                    {/* Rating */}
                                                    <RatingStars ratingcount={item['rating']['rate']} />
                                                </div>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            ))}
                        </div>
                    </>}
                </div>
                {!this.state.isLoading &&
                    <div className="d-flex justify-content-center paginations absolute">
                        <ReactPaginate
                            breakLabel="..."
                            nextLabel=">>"
                            previousLabel="<<"
                            onPageChange={(event) => this.handlePageClick(event)}
                            pageRangeDisplayed={5}
                            pageCount={this.state.numberOfPages}
                        // renderOnZeroPageCount={null}
                        />

                    </div>
                }

            </Layout>
        )
    }

}


export default ProductList;