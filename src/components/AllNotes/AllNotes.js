import React, {useContext, useState} from "react";
import "./AllNotes.css"
import {NoteContext} from "../../context/NotesContextProvider";
import SideBar from "../SideBar/SideBar";
import ViewNotePopUp from "../ViewNotePopUp/ViewNotePopUp";
import "../../CustomSliders.css"
import {useSnackbar} from "notistack";
import {Link} from "react-router-dom";

function Notes() {
    const {allNotes, deleteNote, clearAllNotes} = useContext(NoteContext);
    const [selectedNote, setSelectedNote] = useState({noteTitle: "", noteText: ""});
    const [popUpActive, setPopUpActive] = useState(false);
    const {enqueueSnackbar, closeSnackbar} = useSnackbar();

    const snackbarAction = key => (
        <>
            <button className="snackbar-button" onClick={() => {
                clearAllNotes();
                closeSnackbar(key)
            }}>
                YES
            </button>
            <button className="snackbar-button" onClick={() => {
                closeSnackbar(key)
            }}>
                NO
            </button>
        </>
    );

    function handleDelete(item) {
        deleteNote(item);
    }

    function handleClearAllNotes() {
        enqueueSnackbar(
            'Proceed to delete all notes ?',
            {
                variant: "error",
                preventDuplicate: true,
                persist: true,
                snackbarAction
            });
    }

    function clearPopUpActive() {
        setPopUpActive(false);
    }

    function handleViewNote(item) {
        setPopUpActive(!popUpActive);
        setSelectedNote({...item, noteTitle: item.title, noteText: item.text})
    }

    let renderAllNotes = (
        allNotes.map(
            (item, index) => (
                <div key={index} className="note-item">
                    Title: {item.title}
                    <section>
                        <button
                            className="option-buttons view-button"
                            onClick={() => handleViewNote(item)}
                        >View
                        </button>

                        <button
                            className="option-buttons delete-button"
                            onClick={() => handleDelete(item)}
                        >Delete
                        </button>
                    </section>
                </div>
            )
        )
    );

    const noNotesMessage = (
        <div className="message-container">
            <span>Sorry you haven't created any notes yet.</span>
            <Link to="/newNote" style={{textDecoration: "underline #3b69b4", color: "#3b69b4"}}>Create a note
                here.</Link>
        </div>
    );

    return (
        <div className="test">
            <SideBar/>
            <div className="wrapper">
                <h1 className="notes-title">Your notes</h1>
                <div className="all-notes-container custom-slider">
                    {/*Displays the saved notes*/}
                    {allNotes.length === 0 ? noNotesMessage : renderAllNotes}
                </div>
                {allNotes.length !== 0 &&
                <button onClick={handleClearAllNotes} className="clear-all-button">Delete All Notes</button>}

                {popUpActive && <ViewNotePopUp note={selectedNote} popUpActive={popUpActive} clear={clearPopUpActive}/>}
            </div>
        </div>
    );
}

export default Notes