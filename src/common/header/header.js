import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { getUserByID } from "../../redux-config/actions";
import styles from './header.module.css';


export const Header = (props) => {

//    function getUserDetails(){
//         props.getUser(4);
//         console.log('props', props);
//     }
//     // getUserDetails();
    return (
        <>
            <div className={styles.bgthemedark} data-testid="Header">
                <div className='container'>
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <a className="navbar-brand" href="#"><span className="badge bg-primary logotext">Yms</span></a>
                        {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button> */}
                        <div className="navbar-collapse justify-content-end flex-fill" id="navbarNavAltMarkup">
                            <div className="navbar-nav d-flex flex-row mdevice-w100 justify-content-end">
                                <div className="rightnav-ele"><i className="bi bi-search"></i></div>
                                <div className="rightnav-ele"><i className="bi bi-bell"></i></div>
                                <div className="rightnav-ele"><i className="bi bi-person"></i></div>
                                {/* <Link className="nav-item nav-link" to="/posts">Posts</Link> */}
                                {/* <Link className="nav-item nav-link" to="#">Pricing</Link>
            <Link className="nav-item nav-link disabled" to="#">Disabled</Link> */}
                            </div>
                        </div>
                    </nav>
                </div>
                {/* <Outlet></Outlet> */}
            </div>
        </>
    )
}

function mapStateToProps(state){
    console.log('state of header: ', state);
    return {
        userDetail: state.userOperationsReducer.loggedUser
    }
}

function mapDispatchToProps(dispatch){
    return{
        getUser: (userId)=> dispatch(getUserByID(userId))
    }
}

export default Header;