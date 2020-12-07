import React, {useContext} from "react";
import "./AllNotes.css"
import {NoteContext} from "../../context/NotesContextProvider";
import SideBar from "../SideBar/SideBar";
import Footer from "../Footer/Footer";

function Notes() {
    const {allNotes, deleteNote, clearAllNotes} = useContext(NoteContext);

    function handleDelete(item) {
        //call the function to delete the note
        deleteNote(item);
    }

    function handleClearAllNotes() {
        clearAllNotes();
    }

    return (
        <>
            <div className="background"/>
            <div className="sidebar-container">
                <SideBar/>
            </div>

            <h1 className="all-notes-title">Your notes</h1>

            <button
                className="delete-all-button note-item-buttons note-item-delete-button"
                onClick={handleClearAllNotes}
            >Delete All
            </button>

            <div className="all-notes-container">

                {/*Displays the saved notes*/}
                {allNotes.length === 0 ? <span>Sorry you haven't created any notes yet.</span> :
                    allNotes.map(
                        (item, index) => (
                            <div key={index} className="note-item">
                                Title: {item.title}
                                <section>
                                    {/*View note*/}
                                    <button
                                        className="note-item-view-button note-item-buttons"
                                        style={{marginRight: 10}}
                                    >View
                                    </button>

                                    {/*Delete note*/}
                                    <button
                                        className="note-item-delete-button note-item-buttons"
                                        onClick={() => {
                                            handleDelete(item)
                                        }}
                                    >Delete
                                    </button>
                                </section>
                            </div>
                        )
                    )
                }
            </div>
        </>
    );
}

export default Notes