import React, {useEffect, useState} from "react";


//------------------------ Creating the context ------------------------
export const NoteContext = React.createContext({

    allNotes: [],
    addToNotesData: () => {
    },
    deleteNote: () => {
    },
    clearAllNotes: () => {
    }
});


function NotesContextProvider(props) {
//------------------------ Declare the state ------------------------
    const [allNotes, setAllNotes] = useState([]);


    /* Explanation
        Gets the current notesData from the local browser storage
        Set the state (parses the data from a string to obj, or display an empty array if there is no data)

        Note: This is a useEffect hook that means this is a side effect to the main functionality of the component.
        You can set this hook to be initialized only once by setting the second parameter to [].
    */
    useEffect(
        () => {
            const notesDataJson = localStorage.getItem('notesData');
            setAllNotes(JSON.parse(notesDataJson) || []);
        }, []
    );

//------------------------ Create Note ------------------------
    /*Explanation
        Set the new state (spread the array allNotes and add the new note to it)
        Parse the array to string format
        Update the local storage
    */
    const addToNotesData = (newNote) => {
        const newNotes = [...allNotes, newNote];
        setAllNotes(newNotes);
        const notesDataJson = JSON.stringify(newNotes);
        localStorage.setItem('notesData', notesDataJson);
    };

//------------------------ Delete Note ------------------------
    /* Explanation
        Set the new state (removes the item from the state)
        Parse the array from obj to string
        Update the local storage
    */
    function deleteNote(note) {
        setAllNotes(allNotes.filter(item => item !== note));
        const notesDataJson = JSON.stringify(allNotes);
        localStorage.setItem('notesData', notesDataJson);
    }

// ------------------------ Delete all Notes ------------------------
    /* Explanation
        Check if the array is empty
        empty:
            - Displays an alert that shows there is no notes to delete
        not empty:
            - Clears the value of allNotes array
            - Clears the local storage
    */
    function clearAllNotes() {
        if (allNotes.length === 0) {
            alert("There are no notes to delete..")
        } else {
            setAllNotes([]);
            localStorage.clear();
        }
    }


    return (
        <NoteContext.Provider value={{
            allNotes: allNotes,
            addToNotesData: addToNotesData,
            deleteNote: deleteNote,
            clearAllNotes: clearAllNotes
        }}>
            {/*Passes down all of the functions*/}
            {props.children}
        </NoteContext.Provider>
    )
}

export default NotesContextProvider;