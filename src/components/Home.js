import React from "react";
import "./Home.css"
import Footer from "./Footer/Footer";
import {Link} from "react-router-dom";

function Home() {
    return (
        <div className="home-container">
            <div className="title-card">
                <h1 className="title">Welcome to Noted</h1>
                <Link to="/newNote">
                    <button className="get-started-button">Create a Note</button>
                </Link>
                <Link style={{color: "#4073c4", marginTop: 25, textDecoration: "underline"}} to="/allNotes">Already a user? View your notes here!</Link>
            </div>
        </div>
    )
}

export default Home