import React, { useState, useEffect } from 'react';
import './FadeText.css'; 
import MainContent from './Main'; 

const FadeText = () => {
    const [showWelcome, setShowWelcome] = useState(true);
    const [showSubText, setShowSubText] = useState(false);
    const [fadeOutWelcome, setFadeOutWelcome] = useState(false);
    const [fadeOutSubText, setFadeOutSubText] = useState(false);
    const [showSubTextB, setShowSubTextB] = useState(false);
    const [fadeOutSubTextB, setFadeOutSubTextB] = useState(false);
    const [showSubTextC, setShowSubTextC] = useState(false);
    const [fadeOutSubTextC, setFadeOutSubTextC] = useState(false);
    const [showSubTextD, setShowSubTextD] = useState(false);
    const [fadeOutSubTextD, setFadeOutSubTextD] = useState(false);
    const [showMainContent, setShowMainContent] = useState(false);

    useEffect(() => {
        const welcomeTimer = setTimeout(() => {

            setFadeOutWelcome(true);
            setTimeout(() => {
                setShowWelcome(false);
                setShowSubText(true);
            }, 2000);  
        }, 5000);  

        const subTextTimer = setTimeout(() => {
            setFadeOutSubText(true);
            setTimeout(() => {
                setShowSubText(false);
                setShowSubTextB(true);   
            }, 6000);  
           
        }, 7000);   

        const subTextTimerB = setTimeout(() => {
            setFadeOutSubTextB(true);
            setTimeout(() => {
                
                setShowSubTextB(false);
                 setShowSubTextC(true);
            }, 8000);  
           
        }, 9000);   

         const subTextTimerC = setTimeout(() => {
            setFadeOutSubTextC(true);
            setTimeout(() => {
                
                setShowSubTextC(false);
                setShowSubTextD(true);
            }, 10000);  
           
        }, 11000);   

       const subTextTimerD = setTimeout(() => {
            setFadeOutSubTextD(true);
            setTimeout(() => {
                
                setShowSubTextD(false);
                 setShowMainContent(true);
            }, 12000);  
           
        }, 13000);   

        return () => {
            clearTimeout(welcomeTimer);
            clearTimeout(subTextTimer);
            clearTimeout(subTextTimerB);
            clearTimeout(subTextTimerC);
            clearTimeout(subTextTimerD);
            
        };
    }, []);

    return (
        <div>
            {showWelcome && (
                <div className={`fade-text ${fadeOutWelcome ? "fade-out" : ""}`}>
                <p>   Hello There, this is <i>Shiri Rave</i>..</p>
                </div>
            )}
            {showSubText && (
                <div className={`fade-text ${fadeOutSubText ? "fade-out" : ""}`}>
                   <p>I just created a simple app </p>
                    <p>To demonstrate my knowledge of -</p>
                    </div> )} 
                 {showSubTextB &&  (  <div className={`fade-text ${fadeOutSubTextB ? "fade-out" : ""}`}>
                    <p><b>React.js, Node.js, Heroku </b> Cloud, <b><i>GenAI</i></b>, And <b>Docker.</b></p> 
                     </div> )} 
                {showSubTextC &&  (  <div className={`fade-text ${fadeOutSubTextC ? "fade-out" : ""}`}>     
                    <p>Ask the chat to receive it's guidance.</p>    </div> )} 
                {showSubTextD &&  (  <div className={`fade-text ${fadeOutSubTextD ? "fade-out" : ""}`}>    
                    <p><b>E  n  j  o  y  !  !</b></p>
                  </div> )} 
               
           
              {showMainContent && <MainContent  />} {/* Pass handleSubmit as a prop */}
        </div>
    );
};

export default FadeText;
