import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import BcsGreeting from './BcsGreeting.js';
import BcaGreeting from './BcaGreeting';

function App() {
  const student = [
    { name: "Trusha", department: "BCS" },
    { name: "Shardul", department: "BCS" },
    { name: "Gaurav", department: "BCS" },
    { name: "Shravani", department: "BCA" },
    { name: "Rutuja", department: "BCA" }
  ]
  return (
    student.map((singleElement)=>{
   return <div>{singleElement.department==="BCS"? (<BcsGreeting nameList={singleElement.name}/>):(<BcaGreeting nameList={singleElement.name}/>)} </div>
    })
  );
}
export default App;