import React from "react";
import "./ViewNotePopUp.css";
import "../../CustomSliders.css"
import * as GrIcons from "react-icons/gr"

function ViewNotePopUp(props) {

    return (
        <div className={props.popUpActive ? "pop-up-container active" : "hidden"}>
            <div className="exit-button-container">
                <button className="exit-button"><GrIcons.GrFormClose onClick={props.clear} size="25px"/></button>
            </div>
            <div className="note custom-slider">
                <h3 style={{marginBottom: 25}}>{props.note.noteTitle}</h3>
                <p>{props.note.noteText}</p>
            </div>
        </div>
    );
}

export default ViewNotePopUp;