import React, { useState, useEffect } from 'react';
import './FadeText.css'; 
import MainContent from './Main'; 

const FadeText = () => {
    const [showWelcome, setShowWelcome] = useState(true);
    const [showSubText, setShowSubText] = useState(false);
    const [fadeOutWelcome, setFadeOutWelcome] = useState(false);
    const [fadeOutSubText, setFadeOutSubText] = useState(false);
    const [showMainContent, setShowMainContent] = useState(false);

    useEffect(() => {
        const welcomeTimer = setTimeout(() => {

            setFadeOutWelcome(true);
            setTimeout(() => {
                setShowWelcome(false);
                setShowSubText(true);
            }, 2000); // Wait for fade-out to complete
        }, 5000); // Show welcome text for 3 seconds

        const subTextTimer = setTimeout(() => {
            setFadeOutSubText(true);
            setTimeout(() => {
                setShowSubText(false);
                 setShowMainContent(true);
            }, 2000);  
           
        }, 7000);   

        return () => {
            clearTimeout(welcomeTimer);
            clearTimeout(subTextTimer);
        };
    }, []);

    // Define the handleSubmit function
    // const handleSubmit = (event) => {
    //     event.preventDefault();
    //     // Handle the form submission logic here
    //     alert('Form submitted!');
    // };

    return (
        <div>
            {showWelcome && (
                <div className={`fade-text ${fadeOutWelcome ? "fade-out" : ""}`}>
                    Welcome to My Page!
                </div>
            )}
            {showSubText && (
                <div className={`fade-text ${fadeOutSubText ? "fade-out" : ""}`}>
                    This is where you find all the latest information. Stay tuned!
                </div>
            )}
              {showMainContent && <MainContent  />} {/* Pass handleSubmit as a prop */}
        </div>
    );
};

export default FadeText;



// import React, { useState } from 'react';
// import axios from 'axios';

// const App = () => {
//   const [input, setInput] = useState('');
//   const [response, setResponse] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       console.log('Submitting input:', input);
//       if (!input.trim()) {
//         setResponse('Please enter a valid input.');
//         return;
//       }
//       // Make API call to the server
//       const result = await axios.post('http://localhost:9000/generate', {
//         prompt: input,
//       }, {
//         headers: {
//           'Content-Type': 'application/json', 
//         },
//       });
 
 
//       console.log('API response2:', result.data.reply);
//       setResponse(result.data.reply || 'No response from AI');  
//       setInput(''); // Clear input after submission
//     } catch (error) {
//       console.error('Error fetching response from AI:', error);
//       setResponse('Error fetching response, please try again.');  
//     }
//   };

//   return (
//     <div>
//       <h1>Generative AI Interaction</h1>
//       <form onSubmit={handleSubmit}>
//         <textarea
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Type your query here..."
//         />
//         <button type="submit">Submit</button>
//       </form>
//       <h2>Response:</h2>
//       <p>{response}</p>
//     </div>
//   );
// };

// export default App;