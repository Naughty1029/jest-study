import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

interface IObject {
  [key:string]:number
}

function App() {
  const isObject = ()=> {
    const data:IObject = {one: 1};
    data['two'] = 2;
    const data02 = {one: 1, two: 2};
    console.log(Object.is(data,data02));
  }

  useEffect(()=>{
    isObject()
  },[])
  return (
    <div className="App">
      <p>jest study</p>
    </div>
  );
}

export default App;
