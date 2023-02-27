import React from 'react';
// import { useLocation } from 'react-router';
import Header from '../header/header';
import Layout from '../layout/layout';
import styles from './notfound.module.css';

const NotFound = () => {
    // let location = useLocation()
    return (
        <>
            <Header />
            <main className={styles.mainwrapper + ' container'} data-testid="Layout">

                <div className={styles.middleContentSec + ' shadow p-3 d-flex align-items-center'}>
                    <div className='mx-auto text-center'>
                        <h1 className='font-bold'>404</h1>
                        <h6>Not Found</h6>
                    </div>
                </div>

            </main>

        </>
    )
}

export default NotFound;