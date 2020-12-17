import React, {useContext, useState} from "react";
import "./ViewNotePopUp.css";
import "../../CustomSliders.css"
import * as GrIcons from "react-icons/gr"
import {NoteContext} from "../../context/NotesContextProvider";

function ViewNotePopUp(props) {
    const [editedNote, setEditedNote] = useState({
        id: props.note.id,
        title: props.note.title,
        text: props.note.text
    });
    const {editNote} = useContext(NoteContext);

    function handleChange(event) {
        const {value, name} = event.target;

        setEditedNote({
            ...editedNote,
            [name]: value
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        editNote(editedNote);
        props.clear();
    }

    return (
        <div className={props.popUpActive ? "pop-up-container active" : "hidden"}>
            <div className="exit-button-container">
                <button className="exit-button"><GrIcons.GrFormClose onClick={props.clear} size="25px"/></button>
            </div>

            <div className="note custom-slider">
                <form onSubmit={handleSubmit}>
                    <input
                        name="title"
                        className="title-field"
                        type="text"
                        value={editedNote.title}
                        onChange={handleChange}
                    />

                    <textarea
                        name="text"
                        className="text-field"
                        value={editedNote.text}
                        cols="100"
                        rows="100"
                        onChange={handleChange}
                    />
                    <button>Save</button>
                </form>
            </div>
        </div>
    );
}

export default ViewNotePopUp;