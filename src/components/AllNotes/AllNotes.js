import React, {useContext} from "react";
import "./AllNotes.css"
import {NoteContext} from "../../context/NotesContextProvider";
import SideBar from "../SideBar/SideBar";

function Notes() {
    const {allNotes, deleteNote, clearAllNotes} = useContext(NoteContext);

    function handleDelete(item) {
        deleteNote(item);
    }

    function handleClearAllNotes() {
        clearAllNotes();
    }

    return (
        <div className="test">
            <SideBar/>
            <div className="wrapper">
                <h1 className="notes-title">Your notes</h1>
                <div className="all-notes-container">
                    {/*Displays the saved notes*/}
                    {allNotes.length === 0 ? <span>Sorry you haven't created any notes yet.</span> :
                        allNotes.map(
                            (item, index) => (
                                <div key={index} className="note-item">
                                    Title: {item.title}
                                    <section>
                                        <button
                                            className="option-buttons view-button"
                                        >View</button>

                                        <button
                                            className="option-buttons delete-button"
                                            onClick={() => {handleDelete(item)}}
                                        >Delete</button>
                                    </section>
                                </div>
                            )
                        )
                    }
                </div>

                <button onClick={handleClearAllNotes} className="clear-all-button">Delete All Notes</button>
            </div>
        </div>
    );
}

export default Notes