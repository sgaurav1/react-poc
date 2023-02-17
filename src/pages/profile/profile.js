import React from 'react';
import PropTypes from 'prop-types';
import styles from './profile.module.css';
import Layout from '../../common/layout/layout';

const Profile = (props) => {
  // console.log('props', props.name);
  return (
    <Layout>
      <div className={styles.Profile} data-testid="Profile">
        Profile Component
      </div>
    </Layout>
  )
};

Profile.propTypes = {
  name: PropTypes.string,
  salary: PropTypes.number
};

Profile.defaultProps = {};


export default Profile;
