import React, { Component, useEffect, useState } from "react";
import { Navigations } from '../../utilities/navigations';
import { useNavigate } from "react-router";
import { getUserByID, openCloseSidebar, userLogout } from "../../redux-config/actions";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";

export const SideBar = (props) => {

    const location = useLocation();
    // const { pathName } = location;


    const navigate = useNavigate();
    const logout = () => {
        props.logout();
        navigate('/login');
    }

    useEffect(() => {
        // console.log('setting closed');
        props.setSideBarClosedAtDefault();
    }, [])

    return (
        <>
            <div className={props.sideBarOpenStatus ? 'showSidebarMob_device showSidebar' : 'd-none d-md-block'}>
                <div className="sidebar-wrp shadow px-4 py-3">
                    <div className="pb-2 mb-2 borderw-2">
                        <div className="sidebarheader d-flex align-items-center">
                            <div className="imgbox">
                                <img src={props.userDetail.data.avatar} className='img-responsive' />
                            </div>
                            <div className="content ps-2">{props.userDetail.data.first_name} {props.userDetail.data.last_name}</div>
                        </div>
                    </div>
                    <ul className="sidebar-navlist">
                        {Navigations.map((item, i) => (
                            <li key={item['id']} className={location.pathname == item['path'] ? "navitem mb-1 active" : "navitem mb-1"}>
                                <Link to={item.path} className="text-capitalize"><i className={item.icon}></i> {item.name}</Link>
                            </li>
                        ))}
                    </ul>
                    <div className="pt-2 mt-2 borderT-2 bottom-logoutbtn">
                        <button className="logout-btn btn text-start" onClick={logout}><i className="bi bi-box-arrow-left"></i> Logout</button>
                    </div>
                </div>
            </div>
        </>
    )
}

function mapStateToProps(state) {
    return {
        userDetail: state.authReducer.loggedUserData,
        sideBarOpenStatus: state.commonReducer.isSideBarOpen
    }
}

function mapDispatchToProps(dispatch) {
    return {
        getUser: (userId) => dispatch(getUserByID(userId)),
        logout: () => dispatch(userLogout()),
        setSideBarClosedAtDefault: () => dispatch(openCloseSidebar(false))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideBar);

