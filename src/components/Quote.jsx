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
        <h2>{quote}</h2>

        <p>{author}</p>

        <div className="quote">
          <a onClick={newQuoteHandler}>New Quote</a>
          <a onClick={quoteRequest}>Go Back</a>
        </div>
      </div>
    </>
  );
};

export default Quote;
