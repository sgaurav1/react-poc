import React, { useState, useEffect } from 'react';
import Layout from '../../../common/layout/layout';
import Form from 'react-bootstrap/Form';
import { twinitConfigs } from '../../../utilities/twinit.config';
import { generateAccessTokenForUnknownUser,ImplicitLoginWithTwinitEnvironment } from '../../../services/twinit.service';
const AccessKeyGeneration = () => {

    const [isMember, setMemberStatus] = useState(false);
    const [twinitAccessToken, setAccessToken] = useState('');

    useEffect(() => {
        (async () => {
            if(localStorage.getItem('twinitAccessToken') && localStorage.getItem('twinitAccessToken') != '' && localStorage.getItem('twinitAccessToken') !== undefined && localStorage.getItem('twinitAccessToken') !== null){
                setAccessToken(localStorage.getItem('twinitAccessToken'));
            }
        })();
    }, [])

    const checkIsMemberTrue = (event) => {
        if (event.target) {
            setMemberStatus(event.target.checked);
        }
    }

    const generateAccesTokenForTwinitServices = async () => {
        if (isMember) {
            console.log('imlicit login');
            const gettoken = await ImplicitLoginWithTwinitEnvironment();
        } else {
            console.log('Token for a public user for a fix span of time');
            const token = await generateAccessTokenForUnknownUser();
            console.log('token', token)
            if (token) {
                setAccessToken(token);
                localStorage.setItem('twinitAccessToken', JSON.stringify(token));
            }
        }
    }

    return (
        <Layout>
            <div className="content-head pt-3 pb-2 borderw-2">
                <h6 className="text-secondary">Twint Authorization Setup</h6>
            </div>
            <div className='card p-4 mt-2'>
                <div className='row'>
                    <div className='col-lg-6'>
                        <Form.Check // prettier-ignore
                            type="checkbox"
                            id="custom-switch"
                            label="Member of Twinit Application"
                            name="isMember"
                            onChange={(event) => checkIsMemberTrue(event)}
                        />
                        <button className='btn btn-success btnwidth mt-3 d-block text-white' onClick={generateAccesTokenForTwinitServices}>Generate Access Token</button>
                    </div>
                    <div className='col-lg-6'>
                        <p>Token</p>
                        <div className='card bg-light p-3'>
                            {(twinitAccessToken && twinitAccessToken != '') ?
                                <p className=''>{twinitAccessToken}</p> :
                                <p className=''>No Access Token is Present.</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default AccessKeyGeneration;

