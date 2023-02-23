import React, { Component } from "react";
import { Link } from "react-router-dom";
import styles from './header.module.css';
const Header = () => {
    return (
        <>
            <div className={styles.bgthemedark}>
                <div className='container-fluid'>
                    <nav className="navbar navbar-expand-lg navbar-dark">
                        <a className="navbar-brand" href="#">REACT POC</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link className="nav-item nav-link" to="/posts">Posts</Link>
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

export default Header;