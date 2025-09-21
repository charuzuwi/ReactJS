import './App.css';
import Namecard from './Components/Namecard.jsx';
import { useState } from 'react';

function App() {
  const appStyle = {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    background: 'linear-gradient(135deg, #83a4d4 0%, #b6fbff 100%)',
    minHeight: '100vh',
    padding: '40px 20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',   
    alignItems: 'center',       
    color: '#333',
    gap: '20px',
  };

  const titleStyle = {
    fontSize: '3rem',               
    fontWeight: '900',            
    color: '#1e2a78',  
    marginTop: '-400px',          
    marginBottom: '30px',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: '3px',           
    fontFamily: "'Montserrat', sans-serif",  
    textShadow: '2px 2px 4px rgba(0,0,0,0.15)',  
    background: 'linear-gradient(90deg, #4b6cb7, #182848)',  
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    userSelect: 'none',            
  };


  const cardNavContainer = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
  };

  const buttonStyle = {
    backgroundColor: '#fff',
    color: '#2e3a59',
    border: '2px solid #2e3a59',
    borderRadius: '8px',
    padding: '12px 24px',
    fontSize: '1.2rem',
    fontWeight: '700',
    fontFamily: "'Roboto', sans-serif",
    cursor: 'pointer',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    transition: 'all 0.3s ease',
    userSelect: 'none',
  };

  const disabledButtonStyle = {
    ...buttonStyle,
    cursor: 'not-allowed',
    opacity: 0.5,
  };

  const listOfNames = [
    { id: 1, studName: 'Jivonz Dy', course: 'BSIT', age: '24', address: 'Urgello', favFood: 'Burger', favColor: 'Red' },
    { id: 2, studName: 'Kent Abadiano', course: 'BSIT', age: '21', address: 'Basak Pardo', favFood: 'Footlong', favColor: 'Blue' },
    { id: 3, studName: 'Charles Darwin Hudar', course: 'BSIT', age: '22', address: 'Duljo Fatima', favFood: 'French Fries', favColor: 'Black' },
    { id: 4, studName: 'Russjie Hospita', course: 'BSIT', age: '20', address: 'Labangon', favFood: 'Ice Cream', favColor: 'White' },
    { id: 5, studName: 'Johanne Lumauag', course: 'BSIT', age: '20', address: 'Tisa', favFood: 'Chickenjoy', favColor: 'Yellow' },
    { id: 6, studName: 'Ronel Atillo', course: 'BSIT', age: '20', address: 'Punta Princesa', favFood: 'Steak', favColor: 'Orange' },
    { id: 7, studName: 'Dione Ervin Alesna', course: 'BSIT', age: '20', address: 'Minganilla', favFood: 'BBQ', favColor: 'Blue' },
    { id: 8, studName: 'Joseph Harry Butihen', course: 'BSIT', age: '20', address: 'Tabunok', favFood: 'Mango Float', favColor: 'Black' },
  ];

  const [studentIndex, setStudentIndex] = useState(0);

  const prevStudent = () => {
    if (studentIndex > 0) setStudentIndex(studentIndex - 1);
  };

  const nextStudent = () => {
    if (studentIndex < listOfNames.length - 1) setStudentIndex(studentIndex + 1);
  };

  return (
    <div style={appStyle}>
      <h1 style={titleStyle}>Student Name Cards</h1>

      <div style={cardNavContainer}>
        <button
          style={studentIndex === 0 ? disabledButtonStyle : buttonStyle}
          onClick={prevStudent}
          disabled={studentIndex === 0}
          aria-label="Previous Student"
        >
          Previous
        </button>

        <Namecard data={listOfNames[studentIndex]} />

        <button
          style={studentIndex === listOfNames.length - 1 ? disabledButtonStyle : buttonStyle}
          onClick={nextStudent}
          disabled={studentIndex === listOfNames.length - 1}
          aria-label="Next Student"
        >
          Next
        </button>
      </div>

    </div>
  );
}

export default App;
