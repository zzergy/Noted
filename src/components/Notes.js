import React, {useContext} from "react";
import {NoteContext} from "../App";
import "./Notes.css"
import SideBar from "./SideBar/SideBar";
import Footer from "./Footer/Footer";

function Notes() {
    const {allNotes} = useContext(NoteContext);

    return (
        <>
            <div className="background"/>
            <div className="sidebar-container">
                <SideBar/>
            </div>

            <h1 className="all-notes-title">Your notes</h1>


            <button className="delete-all-button note-item-buttons note-item-delete-button">Delete All</button>

            <div className="all-notes-container">

                {/*Displays the saved notes*/}
                {
                    allNotes.map(
                        (item, index) => (
                            <div key={index} className="note-item">
                                Title: {item.title}
                                <div>
                                    <button className="note-item-view-button note-item-buttons"
                                            style={{marginRight: 10}}>View
                                    </button>
                                    <button className="note-item-delete-button note-item-buttons">Delete</button>
                                </div>
                            </div>
                        )
                    )
                }
            </div>
        </>
    );
}

export default Notes