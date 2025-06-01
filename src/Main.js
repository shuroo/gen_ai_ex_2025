// MainContent.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FadeText.css'; 

const MainContent = ({ onSubmit }) => {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');
    const [afterText, setAfterText] = useState(false);
    
   

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Submitting input:', input);
      if (!input.trim()) {
        setResponse('Please enter a valid input.');
        return;
      }

      const serverUrl = 'https://genaiexserver-f8ccf376d91e.herokuapp.com/generate' ///

      console.log("url to reach:",serverUrl); 
      const result = await axios.post(serverUrl, {   
        prompt: input,
      }, {
        headers: {
          'Content-Type': 'application/json', 
        },
      });
 
 
      console.log('API response2:', result.data.reply);
      setResponse(result.data.reply || 'No response from AI');  
      setInput('');  
    } catch (error) {
      console.error('Error fetching response from AI:', error);
      setResponse('Error fetching response, please try again.');  
    }
  };

   useEffect(() => {
    
   const afterTextTimer =  setTimeout(() => {
     setAfterText(true); 
    
    setTimeout(() => {
             setResponse(''); 
              
            }, 2000)},5000);    
                
    return () =>  
             clearTimeout(afterTextTimer);
           
        }, [response]);
   
    return (
           

            <div class="wrapper"><div class="request-block">
      <h4>Ask the chat anything...</h4>
      <form onSubmit={handleSubmit}>
        <textarea 
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your query here..."
        />
        <button type="submit">Submit</button>
      </form>
      </div>
     <div class="response-block">
     {response?  <h5>Response:</h5> : ''}
      <p>{response}</p>
       {response && afterText?  <b><i>Great! now, do it again...</i></b> : ''}
      
       </div>
    </div>
    );
};

export default MainContent;