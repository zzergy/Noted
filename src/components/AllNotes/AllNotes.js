import React, {useContext, useState} from "react";
import "./AllNotes.css"
import {NoteContext} from "../../context/NotesContextProvider";
import SideBar from "../SideBar/SideBar";
import ViewNotePopUp from "../ViewNotePopUp/ViewNotePopUp";
import "../../CustomSliders.css"
import {useSnackbar} from "notistack";

function Notes() {
    const {allNotes, deleteNote, clearAllNotes} = useContext(NoteContext);
    const [selectedNote, setSelectedNote] = useState({noteTitle: "", noteText: ""});
    const [popUpActive, setPopUpActive] = useState(false);
    const {enqueueSnackbar, closeSnackbar} = useSnackbar();

    const action = key => (
        <>
            <button onClick={() => { clearAllNotes(); closeSnackbar(key) }}>
                Yes
            </button>
            <button onClick={() => { closeSnackbar(key) }}>
                No
            </button>
        </>
    );

    function handleDelete(item) {
        deleteNote(item);
    }

    function handleClearAllNotes() {
        enqueueSnackbar(
            'Proceed to delete all notes? ',
            {
                variant: "error",
                preventDuplicate: true,
                persist: true,
                action
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

    return (
        <div className="test">
            <SideBar/>
            <div className="wrapper">
                <h1 className="notes-title">Your notes</h1>
                <div className="all-notes-container custom-slider">
                    {/*Displays the saved notes*/}
                    {allNotes.length === 0 ? <span>Sorry you haven't created any notes yet.</span> : renderAllNotes}
                </div>
                <button onClick={handleClearAllNotes} className="clear-all-button">Delete All Notes</button>
                {/*{selectedNote !== undefined && <ViewNotePopUp note={selectedNote}/>}*/}

                {popUpActive && <ViewNotePopUp note={selectedNote} popUpActive={popUpActive} clear={clearPopUpActive}/>}
            </div>
        </div>
    );
}

export default Notes