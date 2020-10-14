import React from 'react';
import './App.css';
import Home from "./components/Home";
import NewNote from "./NewNote/NewNote";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Notes from "./components/Notes";

export const NoteContext = React.createContext({
    'allNotes': [], addToNotesData: () => {}
});

const notesDataJson = localStorage.getItem('notesData');
const allNotes = JSON.parse(notesDataJson) || [];

const addToNotesData = (newNote) => {
    allNotes.push(newNote);
    const notesDataJson = JSON.stringify(allNotes);
    localStorage.setItem('notesData', notesDataJson);
};

function App() {
    return (
        <NoteContext.Provider value={{allNotes: allNotes, addToNotesData: addToNotesData}}>
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/newNote" component={NewNote}/>
                    <Route path="/allNotes" component={Notes}/>
                </Switch>
            </Router>
        </NoteContext.Provider>
    );
}

export default App;
