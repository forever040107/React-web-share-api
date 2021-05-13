import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  const handleShareButton = () => {
    if (navigator.share) {
      console.log("Congrats! Your browser supports Web Share API");
      navigator
        .share({
          url: `https://share.toogoodtogo.com/store/1006/milestones/meals-saved/`
        })
        .then(() => {
          console.log("Sharing successfull");
        })
        .catch(() => {
          console.log("Sharing failed");
        });
    } else {
      console.log("Sorry! Your browser does not support Web Share API");
    }
  };
  return (
    <div className="App">
      <h1>React Web Share API</h1>
      <button
        onClick={handleShareButton}
        className="share-button"
        type="button"
        title="Share this article"
      >
        <span>Share button use navigator.share</span>
      </button>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
