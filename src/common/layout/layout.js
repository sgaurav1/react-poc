import React from 'react';
import PropTypes from 'prop-types';
import styles from './layout.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';

const Layout = ({ children }) => {
  // console.log('children', children);
  return (
    (
      <>
        <Header isLoggedIn={children.props['data-login']} />
        <main className={styles.mainwrapper}>
          {children}
        </main>
        <Footer />
      </>
    )
  )
};

Layout.propTypes = {};

Layout.defaultProps = {};

export default Layout;
