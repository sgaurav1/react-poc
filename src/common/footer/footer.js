import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styles from './footer.module.css';
import { UserContetxt } from '../../auth/login/login';


const Footer = () => {

  const contextData = useContext(UserContetxt);
  console.log('context data', contextData);

  return (
    <div className={styles.pagefooter + ' ' + styles.bgthemedark}>All Rights Reserved : Gaurav Singh</div>
  )
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
