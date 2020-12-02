import React, {useState, useContext} from "react";
import "./NewNote.css"
import {Link} from "react-router-dom";
import {NoteContext} from "../App";
import SideBar from "../components/BurgerMenu/SideBar";

const mainContainerStyle = {
    display: "flex",
    flexDirection: "column"
};


function NewNote() {
    const [note, setNote] = useState({title: "", text: ""});

    //Get the notes data from the context by destructuring
    const {addToNotesData} = useContext(NoteContext);

    //Submit the form
    function handleSubmit(event) {
        //Prevents the page from reloading
        event.preventDefault();

        //Sets the new note
        addToNotesData(note);

        //TODO: Clear the form after submission.
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
            {/*TODO: Change the layout and design of the submission form */}
            <form className="form-container" onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="title"
                    value={note.title}
                    placeholder="Enter Title.."
                    onChange={handleChange}
                />
                <textarea
                    style={{resize: "none", height: 300}}
                    name="text"
                    value={note.text}
                    placeholder="Enter your text here.."
                    onChange={handleChange}
                />
                <button>Save</button>
            </form>

            {/*TODO: Change the design of the View notes button*/}
            <Link to="/allNotes">
                <button>View Notes</button>
            </Link>
        </div>
    );
}

export default NewNote