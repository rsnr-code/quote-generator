import AnimatedText from "react-animated-text-content";
import { useState, useEffect } from "react";

const Quote = (props) => {
    const [quote, setQuote] = useState("");
    const [author, setAuthor] = useState("");
    const [newQuote, setNewQuote] = useState(false);

    const { quoteRequest } = props;

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
      }, [newQuote]);

      const newQuoteHandler = () => {
        setNewQuote(!newQuote);
      };

    return ( 
        <>
        <video src="/slowtv.mp4" muted loop autoPlay playsInline></video>
        <div className="overlay"></div>
        <div className="text">
          <h2>
            <AnimatedText
              type="words" // animate words or chars
              animation={{
                x: "200px",
                y: "-20px",
                scale: 5,
                ease: "ease-in-out",
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
                x: "200px",
                y: "-20px",
                scale: 5,
                ease: "ease-in-out",
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
            <a onClick={quoteRequest}>Go Back</a>
          </div>
        </div>
      </>
     );
}
 
export default Quote;