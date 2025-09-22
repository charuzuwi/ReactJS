import UserCardHudar from './Components/UserCardHudar.jsx';
import { use, useState } from "react";
 
export default function Hudar() {
 
    const appStyle = {
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            background: 'linear-gradient(135deg, #12a4d4 0%, #e6feff 100%)',
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
            marginTop: '-100px',          
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
 
    const cardNavContainer = {
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
      };
 
    //test only array cardList
    const cardList = [
        { id: 1, nameInput: 'Charuzu Ruzu', emailInput: 'charuzu@email.com' },
        { id: 2, nameInput: 'Ruzu Don', emailInput: 'ruzu@email.com' },
    ];
 
    const [nameInput, setNameInput] = useState("");
    const [emailInput, setEmailInput] = useState("");
 
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
 
    const addContents = () => {
        if(nameInput.trim() === "" && emailInput.trim() === "") return;
 
        setName([...name, nameInput]);
        setNameInput("");
 
        setEmail([...email, emailInput]);
        setEmailInput("");
 
    };
 
    const printArray1 = name.map((name, index) => (
        <li key={index}>Name: {name}</li>
     ))
    const printArray2 = email.map((email, index) => (
        <li key={index}>Email: {email}</li>
     ))
 
    return(
        <div style={appStyle}>
        <div style={{textAlign: "center",
                    fontSize: "30px"
        }}>
 
            <h1 style={titleStyle}> User List </h1>
 
 
            <input
                type="text"
                value={nameInput}
                onChange={(e) => setNameInput(e.target.value)}
                placeholder="Name"
            />
            <input
                type="text"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Email"
            />
        <div style={cardNavContainer}>
            <button onClick={addContents} style={buttonStyle}
                onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.2)';
                e.currentTarget.style.backgroundColor = 'yellow';
                }}
                onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
                e.currentTarget.style.backgroundColor = '#ffffff';
                }}
            >Add User</button>
            <button onClick={addContents} style={buttonStyle}
                onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05)';
                e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.2)';
                e.currentTarget.style.backgroundColor = 'yellow';
                }}
                onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
                e.currentTarget.style.backgroundColor = '#ffffff';
                }}
            >Remove Last User</button>
        </div>
 
        </div>
 
        <UserCardHudar data={cardList[0]} />
 
            <ul>
                    {printArray1}
                    {printArray2}
            </ul>
        </div>
    );
}