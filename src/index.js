import React from "react";
import ReactDOM from "react-dom";
import './index.css';
import Navbar from "./navbar";
import Meme from "./meme";

function App () {
    return (
        <div>
            <Navbar />
            <Meme />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))