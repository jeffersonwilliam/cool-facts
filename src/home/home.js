import React from "react";
import trivia from "../media/trivia.jpeg";
import "./home.css";

function Home() {
  return (
    <div>
      <div className="hero">
        <nav>
          <img src={trivia} alt="trivia logo" className="logo"></img>
        </nav>
      </div>
    </div>
  );
}

export default Home;
