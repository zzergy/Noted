import React from "react";
import Footer from "../Footer/Footer";
import SideBar from "../SideBar/SideBar"
import "./About.css"
function About () {
    return (
        <div className="main-container">
            <SideBar />
            <div className="about-container">
                I have created a simple site for taking notes.
                I've started it as a project so I can practise React, and to explore new technologies.
            </div>
            <Footer/>
        </div>
    );
}

export default About;