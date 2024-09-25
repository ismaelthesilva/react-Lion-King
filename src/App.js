import React, { useState } from 'react';

const App = () => {
  const [email, setEmail] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubscribe = async (e) => {
    e.preventDefault(); // Prevent default form submission
    try {
      const res = await fetch('http://localhost:5001/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        throw new Error('Network response was not ok');
      }

      const message = await res.text();
      setResponseMessage(message); // Set the response message
    } catch (error) {
      setResponseMessage('Error: ' + error.message); // Handle error
    }
  };

  return (
    <div>
      <h1>Subscribe to Our Newsletter</h1>
      <form onSubmit={handleSubscribe}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {responseMessage && <p>{responseMessage}</p>} {/* Display response */}
    </div>
  );
};

export default App;
