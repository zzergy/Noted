import React from 'react';
import './App.css';
import Home from "./components/Home";
import NewNote from "./components/NewNote/NewNote";
import { Switch, Route, HashRouter } from "react-router-dom";
import Notes from "./components/AllNotes/AllNotes";
import About from "./components/AboutPage/About"
import Footer from "./components/Footer/Footer";
import NotesContextProvider from "./context/NotesContextProvider";
import { SnackbarProvider } from "notistack";



function App() {
    return (
        <SnackbarProvider maxSnack={3}>
            <NotesContextProvider>
                <HashRouter>
                    <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/newNote" component={NewNote} />
                        <Route path="/about" component={About} />
                        <Route path="/allNotes" component={Notes} />
                    </Switch>
                </HashRouter>
                <Footer />
            </NotesContextProvider>
        </SnackbarProvider>
    );
}

export default App;
