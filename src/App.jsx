import "./App.css";
import { useState, useEffect } from "react";
import Header from "./components/Header";
import Welcome from "./components/Welcome";
import Quote from "./components/Quote";

const videoArr = ["/tv2.mp4", "/tv3.mp4", "/tv4.mp4", "/tv5.mp4"];
let video = videoArr[Math.floor(Math.random() * videoArr.length)];

function App() {
  const [explore, setExplore] = useState(false);

  const quoteRequest = (event) => {
    event.preventDefault();
    setExplore(!explore);
    video = videoArr[Math.floor(Math.random() * videoArr.length)];
  };

  return (
    <div>
      <section id="showcase">
        <Header />
        {!explore ? (
          <Welcome quoteRequest={quoteRequest} video={video}/>
        ) : (
         <Quote quoteRequest={quoteRequest}/>
        )}
      </section>
    </div>
  );
}

export default App;
