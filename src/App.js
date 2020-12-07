import React from 'react';
import './App.css';
import Home from "./components/Home";
import NewNote from "./NewNote/NewNote";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Notes from "./components/Notes";
import About from "./components/AboutPage/About"
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";


//Create context with 2 values: allNotes that is an array and addToNotesData that is a function
//This states what the context will want, you have to provide the values
export const NoteContext = React.createContext({
    'allNotes': [],
    addToNotesData: () => {}
});

//Gets the current notesData from the local browser storage
const notesDataJson = localStorage.getItem('notesData');

//Parses the data to an object or an array
const allNotes = JSON.parse(notesDataJson) || [];

//Adding a new note to the local storage
const addToNotesData = (newNote) => {
    //Push the new note to the array allNotes
    allNotes.push(newNote);

    //Parse the array to json format
    const notesDataJson = JSON.stringify(allNotes);

    //Set the new data to the local storage
    localStorage.setItem('notesData', notesDataJson);
};

function App() {
    return (
        <NoteContext.Provider value={{allNotes: allNotes, addToNotesData: addToNotesData}}>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/newNote" component={NewNote}/>
                    <Route path="/about" component={About}/>
                    <Route path="/allNotes" component={Notes}/>
                </Switch>
            </Router>
            <Footer/>
        </NoteContext.Provider>
    );
}

export default App;
