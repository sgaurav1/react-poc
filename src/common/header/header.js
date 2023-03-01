import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { openCloseSidebar } from "../../redux-config/actions";
import styles from './header.module.css';

export const Header = (props) => {

    // props.openCloseSidebar(false);

    function openSidebar() {
        const status = !props.sidebarOpenStatus;
        props.openCloseSidebar(status);
    }

    return (
        <>
            <div className={styles.bgthemedark} data-testid="Header">
                <div className='container'>
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <Link to='/' className="navbar-brand"><span className="badge bg-primary logotext">Yms</span></Link>
                        <div className="navbar-collapse justify-content-end flex-fill" id="navbarNavAltMarkup">
                            <div className="navbar-nav d-flex flex-row mdevice-w100 justify-content-end">
                                <div className="rightnav-ele"><i className="bi bi-search"></i></div>
                                <div className="rightnav-ele"><i className="bi bi-bell"></i></div>
                                <div className="rightnav-ele"><i className="bi bi-person"></i></div>
                                <div className="rightnav-ele d-md-none" onClick={() => openSidebar()}>{!props.sidebarOpenStatus && <i className="bi bi-list"></i>} {props.sidebarOpenStatus && <i className="bi bi-x-lg"></i>}</div>
                            </div>
                        </div>
                    </nav>
                </div>
                {/* <Outlet></Outlet> */}
            </div>
        </>
    )
}

function mapStateToProps(state) {
    return {
        sidebarOpenStatus: state.commonReducer.isSideBarOpen
    }
}

function mapDispatchToProps(dispatch) {
    return {
        openCloseSidebar: (status) => dispatch(openCloseSidebar(status))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);