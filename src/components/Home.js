import React from "react";
import "./Home.css"
import Footer from "./Footer/Footer";
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className={"home-container"}>
            <div className="title-card">
                <h1 className="title">Welcome to Noted</h1>
                <Link to="/newNote">
                    <button className="get-started-button">Get Started</button>
                </Link>
            </div>
            <Footer/>
        </div>
    )
}

export default Home