import React from 'react';
import PropTypes from 'prop-types';
import styles from './profile.module.css';

const Profile = () => (
  <div className={styles.Profile} data-testid="Profile">
    Profile Component
  </div>
);

Profile.propTypes = {};

Profile.defaultProps = {};

export default Profile;
