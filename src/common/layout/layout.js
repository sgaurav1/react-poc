import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './layout.module.css';
import Header from '../header/header';
import Footer from '../footer/footer';
import { UserContetxt } from '../../auth/login/login';

const Layout = (props) => {
  const loginSt = useContext(UserContetxt)
  console.log(loginSt);
  console.log('children', props);
  return (
    (
      <>
        <Header isLoggedIn={loginSt.checkLoggedIn}/>
        <main className={styles.mainwrapper}>
          {props.children}
        </main>
        <Footer />
      </>
    )
  )
};

Layout.propTypes = {};

Layout.defaultProps = {};

export default Layout;
