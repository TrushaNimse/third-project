import logo from './logo.svg';
import './App.css';

function App() {

  const person = {
    name: "Trusha",
    age: 19,
    college: "Bj College"
  };
  return (
    <div>
      {/* <h3>Person Details</h3> */}
      <h1>Name: {person.name}</h1>
      <h2>Age: {person.age}</h2>
      <h3>College: {person.college}</h3>
    </div>
  );
}

export default App;
