// import logo from './logo.svg';
import './App.css';
import React from 'react';
import List from './components/list';
import Form from './components/form';
import AddUserForm from './components/adduser';
import UserList from './components/users';

function App() {
  return (
    <div className='container py-4'>
      {/* <div>
        <h4 className='text-info'>Articles</h4>
        <List />
      </div>
      <div>
        <h4 className='text-info'>Form</h4>
        <Form />
      </div> */}
      <AddUserForm />
      <UserList />
    </div>
  );
}

export default App;
