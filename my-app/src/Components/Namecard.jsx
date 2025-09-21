function Namecard({ data }) {

  const cardStyle = {
    backgroundColor: '#ffffff',
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

  const infoStyle = {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    margin: '6px 0',
    color: '#5f6368',
    fontSize: '1.1rem',  
    fontWeight: '500',
    textAlign: 'left',
  };

  const labelStyle = {
    fontWeight: 'bold',
    width: '130px',
    marginRight: '10px',
  };

  return (
    <div
      style={cardStyle}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.05)';
        e.currentTarget.style.boxShadow = '0 12px 24px rgba(0,0,0,0.2)';
        e.currentTarget.style.backgroundColor = '#f0f8ff';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.1)';
        e.currentTarget.style.backgroundColor = '#ffffff';
      }}
    >
      <h3 style={nameStyle}>{data.studName}</h3>

      <p style={infoStyle}>
        <span style={labelStyle}>Course:</span> {data.course}
      </p>
      <p style={infoStyle}>
        <span style={labelStyle}>Age:</span> {data.age}
      </p>
      <p style={infoStyle}>
        <span style={labelStyle}>Address:</span> {data.address}
      </p>
      <p style={infoStyle}>
        <span style={labelStyle}>Favorite Food:</span> {data.favFood}
      </p>
      <p style={infoStyle}>
        <span style={labelStyle}>Favorite Color:</span> {data.favColor}
      </p>
    </div>
  );
}

export default Namecard;
