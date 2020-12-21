import React from "react";
import SideBar from "../SideBar/SideBar"
import "./About.css"
function About () {
    return (
        <div className="main-container">
            <SideBar />
            <div className="about-container">
                <p>
                    I have created a simple site for taking notes.<br/>
                    My goals with this project are to improve my coding skills using React.
                </p>
            </div>
        </div>
    );
}

export default About;