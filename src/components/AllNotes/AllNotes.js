import React, {useContext, useState} from "react";
import "./AllNotes.css"
import {NoteContext} from "../../context/NotesContextProvider";
import SideBar from "../SideBar/SideBar";
import ViewNotePopUp from "../ViewNotePopUp/ViewNotePopUp";
import "../../CustomSliders.css"
import {useSnackbar} from "notistack";
import {Link} from "react-router-dom";
import Button from '@material-ui/core/Button';

function Notes() {
    const {allNotes, deleteNote, clearAllNotes} = useContext(NoteContext);
    const {enqueueSnackbar, closeSnackbar} = useSnackbar();

    const [selectedNote, setSelectedNote] = useState({id: "", title: "", text: ""});
    const [popUpActive, setPopUpActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    function handleDelete(item) {
        const action = key => (
            <>
                <Button color="secondary" size="small" onClick={() => {
                    deleteNote(item);
                    closeSnackbar(key);
                }}>
                    YES
                </Button>
                <Button color="secondary" size="small" onClick={() => {
                    closeSnackbar(key)
                }}>
                    NO
                </Button>
            </>
        );

        enqueueSnackbar(
            'Proceed to delete ?',
            {
                variant: "warning",
                preventDuplicate: true,
                persist: true,
                action
            });


    }

    function handleDeleteAllNotes() {
        const action = key => (
            <>
                <Button color="secondary" onClick={() => {
                    clearAllNotes();
                    closeSnackbar(key)
                }}>
                    YES
                </Button>
                <Button color="secondary" onClick={() => {
                    closeSnackbar(key)
                }}>
                    NO
                </Button>
            </>
        );

        enqueueSnackbar(
            'Proceed to delete all notes ?',
            {
                variant: "warning",
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
        setSelectedNote({...item, id: item.id, title: item.title, text: item.text})
    }

    function renderAllNotes() {
        let filteredAllNotes = allNotes;

        filteredAllNotes = allNotes.filter(item => (item.title.toLowerCase().includes(searchTerm.toLowerCase())));

        return filteredAllNotes.map(
            (item) => (
                <div key={item.id} className="note-item">
                    {item.title}
                    <section>
                        <button
                            className="note-item-option-buttons view-button"
                            onClick={() => handleViewNote(item)}
                        >View
                        </button>

                        <button
                            className="note-item-option-buttons delete-button"
                            onClick={() => handleDelete(item)}
                        >Delete
                        </button>
                    </section>
                </div>
            )
        )
    }

    const noNotesMessage = (
        <div className="message-container">
            <span>Sorry you haven't created any notes yet.</span>
            <Link to="/newNote" style={{textDecoration: "underline #3b69b4", color: "#3b69b4"}}>Create a note
                here.</Link>
        </div>
    );

    return (
        <div className="background">
            <SideBar/>
            <div className="foreground-container">
                <h1 className="notes-title">Your notes</h1>

                <div className="wrapper custom-slider">
                    <div className="filter-and-delete-container">
                        {
                            allNotes.length !== 0 &&
                            <>
                                <input
                                    type="text"
                                    placeholder="Search.."
                                    className="search-bar"
                                    onChange={(event) => setSearchTerm(event.target.value)}
                                />
                                <button
                                    onClick={handleDeleteAllNotes}
                                    className="delete-all-button">
                                    Delete All Notes
                                </button>
                            </>

                        }
                    </div>

                    <div className="all-notes-container">
                        {/*Displays the saved notes*/}
                        {allNotes.length === 0 ? noNotesMessage : renderAllNotes()}
                    </div>
                </div>
                {
                    popUpActive &&
                    <ViewNotePopUp
                        note={selectedNote}
                        popUpActive={popUpActive}
                        clear={clearPopUpActive}
                    />
                }
            </div>
        </div>
    );
}

export default Notes