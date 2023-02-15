// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Functional from './components/functional';
import ClassComponent from './components/classComponent';
import UseState from './components/usestate';
import FunctionAsProps from './components/functionAsProps';

const empList = [
  {
    "name":'gaurav singh',
    "designation": 'UI Specialist',
    "technology": 'Angular'
  },
  {
    "name":'Nikunj Gurjar',
    "designation": 'UI Specialist',
    "technology": 'React'
  },
  {
    "name":'Akshay Patidar',
    "designation": 'Associate UI Specialist',
    "technology": 'Node'
  }
]


function App() {
  return (
    <div className='App'>
      {/* <Functional data={empList}/> */}
      {/* <ClassComponent data={empList}/> */}
      {/* <UseState /> */}
      <FunctionAsProps />
      {/* <UseState /> */}
    </div>
  );
}

export default App;
