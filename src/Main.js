// MainContent.js
import React, { useState } from 'react';
import axios from 'axios';

const MainContent = ({ onSubmit }) => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Submitting input:', input);
      if (!input.trim()) {
        setResponse('Please enter a valid input.');
        return;
      }

      const serverUrl = 'http://localhost:49549/generate'

      console.log("url to reach:",serverUrl);
      // Make API call to the server
      const result = await axios.post(serverUrl, {  // localm port is 9000
        prompt: input,
      }, {
        headers: {
          'Content-Type': 'application/json', 
        },
      });
 
 
      console.log('API response2:', result.data.reply);
      setResponse(result.data.reply || 'No response from AI');  
      setInput(''); // Clear input after submission
    } catch (error) {
      console.error('Error fetching response from AI:', error);
      setResponse('Error fetching response, please try again.');  
    }
  };
    return (
        // <div className="content">
        //     <h1>Main Content</h1>
        //     <form onSubmit={onSubmit}>
        //         <input type="text" placeholder="Enter something..." />
        //         <button type="submit">Submit</button>
        //     </form>
        // </div>
            <div>
      <h1>Generative AI Interaction</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your query here..."
        />
        <button type="submit">Submit</button>
      </form>
      <h2>Response:</h2>
      <p>{response}</p>
    </div>
    );
};

export default MainContent;