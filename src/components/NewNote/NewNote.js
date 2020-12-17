import React, {useState, useContext} from "react";
import "./NewNote.css"
import SideBar from "../SideBar/SideBar"
import * as BsIcons from "react-icons/bs"
import {NoteContext} from "../../context/NotesContextProvider";
import {useSnackbar} from 'notistack';
import {v4 as uuidv4} from 'uuid';

const mainContainerStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100vh"
};

const labelStyle = {
    marginBottom: " 10px",
    fontSize: "18px",
    color: "#5293FB",
    fontWeight: "bold"
};

function NewNote() {
    const [note, setNote] = useState({id: "", title: "", text: ""});
    const {enqueueSnackbar, closeSnackbar} = useSnackbar();

    //Get the notes data from the context by destructuring
    const {addToNotesData} = useContext(NoteContext);

    /*Explanation
       The onChange prop of the form has an event prop.
       Update the fields so that the state is controlling the value
    */
    function handleChange(event) {
        //Get the value and name props that you are going to change
        const {value, name} = event.target;

        //Set the state
        setNote({
            ...note,
            //The name of the form field has to be the same as the name of the state's values
            [name]: value
        })
    }

    //Submit the form
    function handleSubmit(event) {
        //Prevents the page from reloading
        event.preventDefault();

        if (note.title === "" || note.text === "") {
            //Check if the form is empty
            enqueueSnackbar(
                'Please fill all of the fields before submitting!',
                {
                    variant: "info",
                    preventDuplicate: true
                })
        } else {
            //Sets the new note
            addToNotesData(note);
            enqueueSnackbar(
                'Note saved !',
                {
                    variant: "success",
                }
            )
        }

        //Clear the form after submission.
        setNote({id: uuidv4(), text: "", title: ""});
    }

    return (
        <div style={mainContainerStyle}>
            <SideBar/>

            <div className="form-container">
                <h1>Create a new Note</h1>

                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="title" style={labelStyle}>Title</label>
                    <input
                        id="title"
                        type="text"
                        name="title"
                        value={note.title}
                        placeholder="Enter Title.."
                        onChange={handleChange}
                    />

                    <label htmlFor="text" style={labelStyle}>Note</label>
                    <textarea
                        style={{resize: "none", height: 260}}
                        name="text"
                        id="text"
                        value={note.text}
                        placeholder="Write your note here.."
                        onChange={handleChange}
                    />
                    <button className="submit-button"><BsIcons.BsPencil size="20px"/>Save Note</button>
                </form>
            </div>
        </div>
    );
}

export default NewNote;