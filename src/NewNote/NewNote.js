import React, {useState, useContext} from "react";
import "./NewNote.css"
import {NoteContext} from "../App";
import SideBar from "../components/SideBar/SideBar";
import * as BsIcons from "react-icons/bs"
import Footer from "../components/Footer/Footer";

const mainContainerStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100vh"
};

const labelStyle = {
    marginBottom:" 10px",
    fontSize: "18px",
    color: "#5293FB",
    fontWeight: "bold"
};

function NewNote() {
    const [note, setNote] = useState({title: "", text: ""});

    //Get the notes data from the context by destructuring
    const {addToNotesData} = useContext(NoteContext);

    //Submit the form
    function handleSubmit(event) {
        //Prevents the page from reloading
        event.preventDefault();

        if (note.title === "" || note.text === "") {
            //Check if the form is empty
            alert("Please fill the form before submitting")
        } else {
            //Sets the new note
            addToNotesData(note);
        }

        //Clear the form after submission.
        setNote({text: "", title: ""});
    }

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