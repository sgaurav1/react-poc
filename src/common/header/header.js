import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './header.module.css';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
// const Header = () => (

// );


class Header extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      checkIsLoggedIn: false
    }
    this.getNewProps = this.getNewProps.bind(this);
  }

  getNewProps(e){
    // console.log('function as props: ',e);
  }

  static getDerivedStateFromProps(props, state){
    // state.setState(props.isLoggedIn);
    // console.log('getDerived', props, state);
    return {checkIsLoggedIn : props.isLoggedIn};
  }
  
  render() {
    let conditionalLink = null;
    if(this.state.checkIsLoggedIn){
      conditionalLink = <Link className="nav-item nav-link" to="/profile">Profile</Link>
    }else{
      conditionalLink = <Link className="nav-item nav-link" to="/login" onClick={this.getNewProps}>Login</Link>
    }
    return (
      <div className={styles.bgthemedark}>
        <div className='container-fluid'>
          <nav className="navbar navbar-expand-lg navbar-dark">
            <a className="navbar-brand" href="#">REACT POC</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-item nav-link" to="/home">Home</Link>
                <Link className="nav-item nav-link" to="/form">Form</Link>
                <Link className="nav-item nav-link" to="/crudOperations">CRUD Operations</Link>
                {conditionalLink}
                {/* <Link className="nav-item nav-link" to="/profile">User</Link> */}
                {/* <Link className="nav-item nav-link" to="#">Pricing</Link>
            <Link className="nav-item nav-link disabled" to="#">Disabled</Link> */}
              </div>
            </div>
          </nav>
        </div>
        {/* <Outlet></Outlet> */}
      </div>
    )
  }
}


// const Header = (props) => {
//   console.log('header props',props);
//   const [isLoggedIn, setIsLogedIn] = useState(false);
//   let conditionalLink = null;
//   if (isLoggedIn) {
//     conditionalLink = <Link className="nav-item nav-link" to="/profile">Profile</Link>
//   } else {
//     conditionalLink = <Link className="nav-item nav-link" to="/login">Login</Link>
//   }
//   return (
//     <div className={styles.bgthemedark}>
//       <div className='container-fluid'>
//         <nav className="navbar navbar-expand-lg navbar-dark">
//           <a className="navbar-brand" href="#">REACT POC</a>
//           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
//             <div className="navbar-nav">
//               <Link className="nav-item nav-link" to="/home">Home</Link>
//               {conditionalLink}
//               {/* <Link className="nav-item nav-link" to="/profile">User</Link> */}
//               {/* <Link className="nav-item nav-link" to="#">Pricing</Link>
//             <Link className="nav-item nav-link disabled" to="#">Disabled</Link> */}
//             </div>
//           </div>
//         </nav>
//       </div>
//       <Outlet></Outlet>
//     </div>
//   )
  
// }

Header.propTypes = {};

Header.defaultProps = {};

export default Header;
