import React from 'react';
import PropTypes from 'prop-types';
import styles from './nomatch.module.css';
import { useLocation } from 'react-router-dom';

const Nomatch = () => {
  let location = useLocation();
  return (
    <div className={styles.Nomatch} data-testid="Nomatch">
      Nomatch for {location.pathname}
    </div>
  )
}

Nomatch.propTypes = {};

Nomatch.defaultProps = {};

export default Nomatch;
