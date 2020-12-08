import React from "react";
import "./ViewNotePopUp.css";
import "../../CustomSliders.css"

function ViewNotePopUp(props) {

    return (
        <div className={props.popUpActive ? "pop-up-container active" : "hidden"}>
            <div className="exit-button">
                <button onClick={props.clear}>X</button>
            </div>
            <div className="note custom-slider">
                <h3 style={{marginBottom: 25}}>{props.note.noteTitle}</h3>
                <p>{props.note.noteText}</p>
            </div>
        </div>
    );
}

export default ViewNotePopUp;