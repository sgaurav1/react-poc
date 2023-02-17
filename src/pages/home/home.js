import React from 'react';
import PropTypes from 'prop-types';
import styles from './home.module.css';
import Layout from '../../common/layout/layout';
import { findAllByDisplayValue } from '@testing-library/react';
import Profile from '../profile/profile';
import { useState, useEffect } from 'react';
import Comments from '../../components/comments';
import Photos from '../../components/photos';


class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'users',
      data: [],
      update: true,
      comments: {
        type: 'comments',
        commentData: []
      }
    }
    this.loadPosts = this.loadUsers.bind(this)
  }


  componentDidMount() {
    this.loadPosts()
  }

  loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users').then((res) => res.json()).then((result) => {
      this.setState({ type:'users',data: result, update: true })
      console.log(this.state.data);
    });
  }

  loadComment(postId) {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`).then(res => res.json()).then((result) => {
      console.log('comments', result);
      this.setState(prevState => ({
        comments: { commentData: result }
      }))
      console.log('dddddd', this.state);
    })
  }

  loadPhotos() {
    fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json()).then((result) => {
      console.log('result: ', result);
      this.setState({ type: 'photos', data: result, update: true })
    })
  }

  shouldComponentUpdate() {
    if (!this.state.update) {
      return false;
    }
    return true;
  }

  componentDidUpdate() {
    console.log('Component didUpdate');
    // return false;
  }
  isUpdateOn = <button className='btn btn-danger'>Stop Updating</button>
  componentUpdateSetting(state) {
    if (state === 'stop') {
      this.setState({ update: false });
    } else {
      this.setState({ update: true });
    }
  }

  render() {
    if (this.state.update) {
      this.isUpdateOn = <button className='btn btn-danger' onClick={() => this.componentUpdateSetting('stop')}>Stop Updating</button>
    } else {
      this.isUpdateOn = <button className='btn btn-success' onClick={() => this.componentUpdateSetting('on')}>On Updating</button>
    }
    // @ts-ignore
    // <Profile />
    <Profile salary={10} name='gaurav' />
    if (this.state.type === 'users') {
      return (
        <Layout>
          <div className={styles.Home} data-testid="Home">
            <div className='container py-3'>
              <div className='d-flex justify-content-center mb-3'>
                {this.isUpdateOn}
                <button className='btn btn-primary ms-2' onClick={() => this.loadPhotos()}>Load Photos</button>
              </div>
              <div className='col-lg-10 mx-auto'>
                <table className='table table-light table-bordered'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Website</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.data.map((item, i) => (
                      <tr key={item['id']}>
                        <td>{i + 1}</td>
                        <td>{item['name']}</td>
                        <td>{item['email']}</td>
                        <td>{item['website']}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Layout>
      )
    } else {
      return (
        <Layout>
          <div className={styles.Home} data-testid="Home">
            <div className='container py-3'>
              <div className='d-flex mb-3 justify-content-center'>
                {/* {this.isUpdateOn} */}
                <button className='btn btn-primary ms-2' onClick={() => this.loadUsers()}>Load Users</button>
              </div>
              <div className='col-lg-10 mx-auto'>
                <table className='table table-light table-bordered'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Photos</th>
                      {/* <th>Comments</th> */}
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.data.map((item, i) => (
                      <tr key={item['id']}>
                        <td>{i + 1}</td>
                        <td>{item['title']}</td>
                        <td><img src={item['thumbnailUrl']} /></td>
                        <td></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Layout>
      )
    }
  }

}

const HomeWithHigherOrder = () => {

  const [commentsData, setUserData] = useState([]);
  const [photoData, setPhdata] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments?postId=1').then(res => res.json()).then((result) => {
      console.log('result', result);
      setUserData(result);
    })
  }, [])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/photos').then(res => res.json()).then((result) => {
      console.log('result', result);
      setPhdata(result);
    })
  }, [])

  return (
    <Layout>
      <div className={styles.Home} data-testid="Home">
        <div className='container py-3'>
          <Comments data={commentsData}></Comments>
          <Photos data={photoData}></Photos>
        </div>
      </div>
    </Layout>
  )
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
