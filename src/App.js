import React from 'react';
import './App.css';
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";


function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/newNote" component={NavBar}/>
            </Switch>
        </Router>
    );
}

export default App;
