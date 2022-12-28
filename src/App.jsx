import { useState } from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Quote from "./components/Quote";
import "./App.css";

const videoArr = ["/tv2.mp4", "/tv3.mp4", "/tv4.mp4", "/tv5.mp4"];
let video = videoArr[Math.floor(Math.random() * videoArr.length)];

function App() {
  const [previewQuote, setPreviewQuote] = useState(false);

  const quoteRequest = (event) => {
    event.preventDefault();
    setPreviewQuote(!previewQuote);
    video = videoArr[Math.floor(Math.random() * videoArr.length)];
  };

  return (
      <section id="showcase">
        <Header />
        {!previewQuote ? (
          <Welcome quoteRequest={quoteRequest} video={video}/>
        ) : (
         <Quote quoteRequest={quoteRequest}/>
        )}
      </section>
  );
}

export default App;
