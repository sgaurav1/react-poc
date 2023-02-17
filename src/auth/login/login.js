import React from 'react';
import PropTypes from 'prop-types';
import styles from './login.module.css';
import Header from '../../common/header/header';
import { useState, useEffect } from 'react';
import Layout from '../../common/layout/layout';
import { useNavigate } from 'react-router-dom';
import MessageBox from '../../common/messageox/messagebox';

const Login = () => {
  let navigate = useNavigate();
  const [isLoggedIn, setLoggedInSate] = useState(false);
  const signin = () => {
    setLoggedInSate(true);
    // navigate('/home')
  }
  const logOut = () => {
    setLoggedInSate(false);
  }

  let loginData = { "title": 'Account Login', "message": "Login to your account" }
  let loggedIndata = { "title": 'You are logged in', "message": "Welcome to React POC" }
  let viewState = <button className='btn btn-dark' onClick={signin}>Login</button>;
  let messageBox = <MessageBox data={loginData} />
  useEffect(() => {
    console.log('runnng useeffect: ', isLoggedIn);
  })

  if (isLoggedIn) {
    messageBox = <MessageBox data={loggedIndata} />
    viewState = <button className='btn btn-dark mt-3' onClick={logOut}>Logout</button>
  } else {
    messageBox = <MessageBox data={loginData} />
    viewState = <button className='btn btn-dark mt-3' onClick={signin}>Login</button>;
  }



  return (
    <Layout>
      <div className={styles.Login + ' ' + 'py-4'} data-testid="Login" data-login={isLoggedIn}>
        <div className='col-md-5 mx-auto'>
          {messageBox}
        </div>
        {viewState}
      </div>
    </Layout>
  )
}


// login for formthings
class LoginWithForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChanges(event, type){
    if(type === 'input'){
      this.setState({
        userName: event.target.value
      })
    }
    if(type === 'email'){
      this.setState({
        email: event.target.value
      })
    }
    if(type === 'password'){
      this.setState({
        password: event.target.value
      })
    }
  }

  handleSubmit(event){
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <Layout>
        <div className='container py-5'>
          <div className='row justify-content-center align-items-center'>
            <div className='col-md-4'>
              <div className='border p-3 shadow-lg'>
                <h5 className='text-center text-success'>Account Login</h5>
                <form>
                  <div className={styles.formGroup}>
                    <label>User Name</label>
                    <input type='text' className='form-control' placeholder='Enter Email' name='userName' value={this.state.userName || ''} onChange={(event)=> this.handleChanges(event, 'input')} />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Email</label>
                    <input type='text' className='form-control' placeholder='Enter Email' name='email' value={this.state.email || ''} onChange={(event)=> this.handleChanges(event, 'email')} />
                  </div>
                  <div className={styles.formGroup}>
                    <label>Password</label>
                    <input type='password' className='form-control' placeholder='Enter password' name='password' value={this.state.password || ''} onChange={(event)=> this.handleChanges(event, 'password')} />
                  </div>
                  <div className='d-flex justify-content-center'>
                    <button className='btn btn-dark' type='button' onClick={(event)=> this.handleSubmit(event)}>Login</button>
                    <button className='btn btn-dark ms-2' type='button'>Cancel</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
  }

}


Login.propTypes = {};

Login.defaultProps = {};

export default Login;
// export default LoginWithForm;
