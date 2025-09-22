function UserCardHudar( {data} ){
 
  const cardStyle = {
    backgroundColor: 'white',
    borderRadius: '16px',
    boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
    padding: '30px',
    width: '350px',      
    height: '250px',    
    textAlign: 'center',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
    cursor: 'pointer',
    overflow: 'hidden',
    fontFamily: "'Segoe UI', sans-serif",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  };
 
  const nameStyle = {
    margin: '0 0 16px 0',
    fontSize: '1.8rem',  
    fontWeight: '600',
    color: '#2e3a59',
    letterSpacing: '0.5px',
  };
 
 
  return(
 
    <div
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.2)';
        e.currentTarget.style.backgroundColor = 'yellow';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
        e.currentTarget.style.backgroundColor = 'white';
      }}
    >
      <h3 style={nameStyle}>Name: {data.nameInput} </h3>
      <h3 style={nameStyle}>Email: {data.emailInput} </h3>
    </div>
  );
}
 
export default UserCardHudar;