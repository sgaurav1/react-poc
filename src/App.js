// import logo from './logo.svg';
import './App.css';
import React from 'react';
import List from './components/list';
import Form from './components/form';
import AddUserForm from './components/adduser';
import UserList from './components/users';
import Counter from './components/counter';
import Post from './components/post';

function App() {
  return (
    <div className='container py-4'>
      <div className='mb-4 pb-3 shadow bg-light p-4'>
        <h4 className='text-info'>Articles</h4>
        <List />
        <Form />
      </div>
      <div className='mb-4 pb-3 border shadow p-4'>
        <AddUserForm />
        <UserList />
      </div>
      <div className='mb-4 pb-3 border-bottom bg-light'>
        <Counter />
      </div>
      <div className='p-4 shadow bg-light'>
        <Post />
      </div>
    </div>
  );
}

export default App;
