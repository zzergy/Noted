import React from 'react';
import './App.css';
import Home from "./components/Home";
import Notes from "./Notes/Notes";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/newNote" component={Notes}/>
            </Switch>
        </Router>
    );
}

export default App;
