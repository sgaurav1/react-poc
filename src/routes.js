// @ts-nocheck
import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Posts from "./components/posts/posts";
import Login from "./auth/login/login";
import NotFound from "./common/nofound/notfound";
import UserList from "./components/user-list/userlist";
import { connect } from "react-redux";
import { checkIsUserLogedIn, openCloseSidebar } from "./redux-config/actions";
// import history from "./history";
import UsersDetail from "./components/user-details/user-detsils";
import AddNewUser from "./components/add-user/addUser";
import ProductList from "./components/product-list/productList";
import ProductDetail from "./components/product-details/productDetails";
import ProductsFromCosmic from "./components/blogs/blogs";
import AddProducts from "./components/blogs/addProduct";
import AccessKeyGeneration from './components/twinit-environment/access-key-generation/AccesKeyGeneration';
import TelemetryCollection from "./components/twinit-environment/telemetry-collection/TelemetryCollection";
export class Routers extends Component {

    constructor(props){
        super(props);
        this.state = {
            twinitAccessToken: null
        }
    }

    componentDidMount() {
        this.props.checkIsUserLogedIn();

    }

    render() {
        return (
            <>
                <Routes>
                    {!this.props.isLoggedIn && <>
                        <Route path="/" index element={<Login />}></Route>
                        <Route index element={<Login />}></Route>
                        <Route path="login" element={<Login />}></Route>
                        <Route path="*" element={<NotFound />}></Route>
                    </>}
                    {this.props.isLoggedIn && <>
                        <Route path="/" index element={<UserList />}></Route>
                        <Route path="userList" element={<UserList />}></Route>
                        <Route path={`userDetails/:userId`} element={<UsersDetail />}></Route>
                        <Route path='addUser' element={<AddNewUser />}></Route>
                        <Route path='productList' element={<ProductList />}></Route>
                        <Route path='prductsFromCosmic' element={<ProductsFromCosmic />}></Route>
                        <Route path={`productDetails/:productId`} element={<ProductDetail />}></Route>
                        <Route path={`productDetails/?`} element={<ProductDetail />}></Route>
                        <Route path='addproduct' element={<AddProducts />}></Route>
                        <Route path="app" element={<AccessKeyGeneration />}></Route>
                        <Route path="dataSources" element={<TelemetryCollection />}></Route>
                        
                        <Route path="*" element={<NotFound />}></Route>
                    </>}
                    {/* <Route path="posts" element={<Posts />}></Route> */}

                </Routes>
            </>
        )
    }
}

function mapStateToProps(state) {
    return {
        auth: state.authReducer.auth,
        isLoggedIn: state.authReducer.isLoggedIn
    }
}

function mapDispatchToProps(dispatch) {
    return {
        checkIsUserLogedIn: () => dispatch(checkIsUserLogedIn()),
        // closeSideBarIfOpened: ()=> dispatch(openCloseSidebar(false))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Routers);