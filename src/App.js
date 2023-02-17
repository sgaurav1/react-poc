// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Functional from './components/functional';
import ClassComponent from './components/classComponent';
import UseState from './components/usestate';
import FunctionAsProps from './components/functionAsProps';
import MountingCmp from './components/mountingCmp';
import RenderUserData from './components/renderUserData';
import ErrorBoundary from './components/errorBoundary';
import UseffectComponent from './components/useEffectComponent';
import Routes from '../src/routes';
import Layout from './common/layout/layout';
const empList = [
  {
    "name": 'gaurav singh',
    "designation": 'UI Specialist',
    "technology": 'Angular'
  },
  {
    "name": 'Nikunj Gurjar',
    "designation": 'UI Specialist',
    "technology": 'React'
  },
  {
    "name": 'Akshay Patidar',
    "designation": 'Associate UI Specialist',
    "technology": 'Node'
  }
]


function App() {
  return (
    <div className='App'>
      {/* <Layout>
        <Routes />
      </Layout> */}
      <Routes />
      {/* <Functional data={empList}/> */}
      {/* <ClassComponent data={empList}/> */}
      {/* <UseState /> */}
      {/* <FunctionAsProps /> */}
      {/* <UseState /> */}
      {/* <MountingCmp updatedState='green'/> */}
      {/* <RenderUserData name='ravi singh'/> */}
      {/* <ErrorBoundary /> */}
      {/* <UseffectComponent /> */}
      {/* <Routes /> */}
    </div>
  );
}

export default App;
