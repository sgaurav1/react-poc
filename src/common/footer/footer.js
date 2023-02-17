import React from 'react';
import PropTypes from 'prop-types';
import styles from './footer.module.css';

const Footer = () => (
  <div className={styles.pagefooter + ' '+ styles.bgthemedark}>All Rights Reserved : Gaurav Singh</div>
);

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
