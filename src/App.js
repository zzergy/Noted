import React, {useEffect, useState} from 'react';
import './App.css';
import Home from "./components/Home";
import NewNote from "./NewNote/NewNote";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Notes from "./components/Notes";
import About from "./components/AboutPage/About"
import SideBar from "./components/SideBar/SideBar";
import Footer from "./components/Footer/Footer";
import NotesContextProvider from "./context/NotesContextProvider";



function App() {

    return (
            <NotesContextProvider>
                <Router>
                    <Switch>
                        <Route path="/" exact component={Home}/>
                        <Route path="/newNote" component={NewNote}/>
                        <Route path="/about" component={About}/>
                        <Route path="/allNotes" component={Notes}/>
                    </Switch>
                </Router>
                <Footer/>
            </NotesContextProvider>
    );
}

export default App;
