import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import Greetings from './Greetings';

function App() {
 const name=["Trusha","Shravani","Shardul","Gaurav","Rutuja","Ayush","Apeksha","Nikita","Anamika"]

 return (
    <Greetings nameList={name}/>
  );
}

export default App;
