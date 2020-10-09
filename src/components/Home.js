import React from "react";
import "./Home.css"
import Footer from "./Footer";

function Home() {
    return (
        <div className={"home-container"}>
            <h1 className="title">Welcome to Noted</h1>
            <h3 className="motto">~ Let your words flow ~</h3>

            <Footer/>
        </div>

    )
}

export default Home