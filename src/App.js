import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Email Form</h1>
      <form>
        <label>Email Address:</label>
        <input type="email" placeholder="Enter your email" />

        <label>Message:</label>
        <textarea rows="4" placeholder="Type your message"></textarea>

        <button type="submit">Submit</button>
      </form>

      <div className="animal-section">
        <h2>My Favourite Animal</h2>
        <img src="your-animal-image.jpg" alt="Favourite Animal" />
      </div>
    </div>
  );
}

export default App;
