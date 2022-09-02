import React from "react";
import troll from "./trolololo.png";

export default function Navbar () {
    return (
        <nav>
            <img className="logo" alt="troll" src={troll} />
            <span className="logo">Meme Generator</span>
            <h3 className="title">React Course - Project 3</h3>
        </nav>
    )
}