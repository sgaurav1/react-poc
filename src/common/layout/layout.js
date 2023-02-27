import React from 'react';
import PropTypes from 'prop-types';
import styles from './layout.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import SideBar from '../sidebar/sidebar';

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <main className={styles.mainwrapper + ' container'} data-testid="Layout">
                <div className='row'>
                    <div className='col-md-4 col-xl-3'>
                        <SideBar />
                    </div>
                    <div className='col-md-8 col-xl-9'>
                        <div className={styles.middleContentSec + ' shadow p-3'}>
                            {children}
                        </div>
                    </div>
                </div>
            </main>
            {/* <Footer /> */}
        </>
    )
}

Layout.propTypes = {};

Layout.defaultProps = {};

export default Layout;
