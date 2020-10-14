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

    const {addToNotesData} = useContext(NoteContext);

    function handleSubmit(event) {
        event.preventDefault();
        addToNotesData(note);
    }

    function handleChange(event) {
        const {value, name} = event.target;
        setNote({
            ...note,
            [name]: value
        })
    }


    return (
        <div style={mainContainerStyle}>
            <SideBar/>

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

            <Link to="/allNotes">
                <button>View Notes</button>
            </Link>
        </div>
    );
}

export default NewNote