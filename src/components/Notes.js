import React, {useContext} from "react";
import {NoteContext} from "../App";

function Notes() {
    const {allNotes} = useContext(NoteContext);

    return (
        <>
            {
                allNotes.map(
                    (item, index) => (
                        <div key={index}>Title: {item.title} Note: {item.text}</div>
                    )
                )
            }
        </>
    );
}

export default Notes