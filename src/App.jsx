import "./App.css";
import { useState, useEffect } from "react";
import AnimatedText from 'react-animated-text-content';
import Header from "./components/Header";

const videoArr = ["/tv2.mp4", "/tv3.mp4", "/tv4.mp4", "/tv5.mp4"]
let video = videoArr[Math.floor(Math.random()*videoArr.length)];

function App() {
  const [explore, setExplore] = useState(false)
  const [newQuote, setNewQuote] = useState(false)
  const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");


const clickHandler = (event) => {
  event.preventDefault()
  setExplore(!explore);
  video = videoArr[Math.floor(Math.random()*videoArr.length)];
}

    const newQuoteHandler = () => {
      setNewQuote(!newQuote)
    }
  
    useEffect(() => {
     const clickHandler = async () => {
      await fetch("https://type.fit/api/quotes")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
        
          const quotes = data;
          const quote = quotes[Math.floor(Math.random() * quotes.length)];
          
          setQuote(quote.text);
          setAuthor(quote.author);
        });
    };   
    clickHandler();
    }, [newQuote])

    
  return (
    <div>
  <section id="showcase">
  <Header />
  {!explore ? 
  <>
    <video src={video} muted loop autoPlay playsInline></video>
    <div className="overlay"></div>
    <div className="text">
      <h2>Welcome To</h2>
      <h3>The Quotes Channel</h3>
      <p></p>
      <a onClick={clickHandler}>QUOTE</a>
    </div>
    </>
    :
    <>
<video src="/slowtv.mp4" muted loop autoPlay playsInline></video>
<div className="overlay"></div>
<div className="text">

  <h2>
<AnimatedText
type="words" // animate words or chars
animation={{
x: '200px',
y: '-20px',
scale: 5,
ease: 'ease-in-out',
}}
animationType="lights"
interval={0.04}
duration={0.5}
tag="p"
className="animated-paragraph"
includeWhiteSpaces
threshold={0.1}
rootMargin="20%"
>
{quote}
</AnimatedText>
</h2>
 
<p>
<AnimatedText
type="words" // animate words or chars
animation={{
x: '200px',
y: '-20px',
scale: 5,
ease: 'ease-in-out',
}}
animationType="lights"
interval={0.04}
duration={0.5}
tag="p"
className="animated-paragraph"
includeWhiteSpaces
threshold={0.1}
rootMargin="20%"
>
{author}
</AnimatedText>
</p>

  <div className="quote">
  <a onClick={newQuoteHandler}>New Quote</a>
  <a onClick={clickHandler}>Go Back</a>
  </div>
  
</div>
</>
}
</section>
    </div>

  );
}

export default App;
