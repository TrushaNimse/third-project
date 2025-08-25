import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [student, setStudent] = useState([{ srno: 1, name: "Trusha", marks: 95 },
  { srno: 2, name: "Shravani", marks: 92 },
  { srno: 3, name: "Gaurav", marks: 93 },
  { srno: 4, name: "Rutuja", marks: 91 },
  { srno: 5, name: "Shardul", marks: 93 }]);


  // const student=[{ srno: 1, name: "Trusha", marks: 95 },
  // { srno: 1, name: "Shravani", marks: 92 },
  // { srno: 1, name: "Gaurav", marks: 93 },
  // { srno: 1, name: "Rutuja", marks: 91 },
  // { srno: 1, name: "Shardul", marks: 93 }]
  return (
    <div>
      <table border="1">
        <tr>
          <th>Sr.no</th>
          <th>Name</th>
          <th>Marks</th>
        </tr>
        {student.map((singleElement) => (
          <tr>
            <td>{singleElement.srno}</td>
            <td>{singleElement.name}</td>
            <td>{singleElement.marks}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export default App;
