import { useEffect, useState } from "react";
import AnimatedText from 'react-animated-text-content';

const Quote = () => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
  
    useEffect(() => {
     const clickHandler = async () => {
      await fetch("https://type.fit/api/quotes")
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          const quotes = data;
          const quote = quotes[Math.floor(Math.random() * quotes.length)];
          console.log(quote);
          setQuote(quote.text);
          setAuthor(quote.author);
        });
    };   
    clickHandler();
    }, [])
    

    return ( 
        <section id="showcase">
          <header>
            <h2 className="logo">QUOTES TELEVISION</h2>
          </header>
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
  animationType="blocks "
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
  animationType="blocks "
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
            <p></p>
            <a href="/">Go Back</a>
          </div>
        </section>
     );
}
 
export default Quote;