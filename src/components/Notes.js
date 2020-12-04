import React, {useContext} from "react";
import {NoteContext} from "../App";
import "./Notes.css"
import SideBar from "./SideBar/SideBar";
import Footer from "./Footer/Footer";

function Notes() {
    const {allNotes} = useContext(NoteContext);

    return (
        <div className="wrapper">
            <div className="background"/>
            <div className="sidebar-container">
                <SideBar/>
            </div>

            <h1 className="all-notes-title">Your notes</h1>

            <div className="all-notes">

                {/*Displays the saved notes*/}
                {
                    allNotes.map(
                        (item, index) => (
                            <div key={index} className="note-item">
                                Title: {item.title}
                                <button className="note-item-view-button">View Note</button>
                            </div>
                        )
                    )
                }
            </div>

            <Footer/>
        </div>
    );
}

export default Notes