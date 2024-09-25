import React, { useState } from 'react';

const YourComponent = () => {
  const [email, setEmail] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const apiUrl = process.env.NODE_ENV === 'production' ? 'https://your-api-url' : 'http://localhost:5000';
    
    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ input_parameter: email }),
      });
      const data = await response.json();
      setResponseMessage(data.message);
    } catch (error) {
      setResponseMessage('Error: ' + error.message);
    }
  };

  return (
    <div>
      <h1>Subscribe to our Newsletter</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>}
    </div>
  );
};

export default YourComponent;
