const Contact = () => {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <p>If you have any questions or concerns, please feel free to contact us using the form below.</p>
      
      <form style={{ marginTop: '20px' }}>
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="name" style={{ display: 'block', marginBottom: '5px' }}>Name</label>
          <input 
            type="text" 
            id="name" 
            style={{ 
              width: '100%', 
              padding: '8px', 
              backgroundColor: '#1a2035', 
              border: 'none', 
              borderRadius: '4px', 
              color: 'white' 
            }} 
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '5px' }}>Email</label>
          <input 
            type="email" 
            id="email" 
            style={{ 
              width: '100%', 
              padding: '8px', 
              backgroundColor: '#1a2035', 
              border: 'none', 
              borderRadius: '4px', 
              color: 'white' 
            }} 
          />
        </div>
        
        <div style={{ marginBottom: '15px' }}>
          <label htmlFor="message" style={{ display: 'block', marginBottom: '5px' }}>Message</label>
          <textarea 
            id="message" 
            rows={5} 
            style={{ 
              width: '100%', 
              padding: '8px', 
              backgroundColor: '#1a2035', 
              border: 'none', 
              borderRadius: '4px', 
              color: 'white' 
            }} 
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          style={{ 
            padding: '10px 20px', 
            backgroundColor: '#1976d2', 
            color: 'white', 
            border: 'none', 
            borderRadius: '4px', 
            cursor: 'pointer' 
          }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;