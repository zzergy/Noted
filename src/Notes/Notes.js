import React from "react";
import "./Notes.css"
import {Link} from "react-router-dom";

const mainContainerStyle = {
    display: "flex",
    flexDirection: "column"
};

class Notes extends React.Component {
    constructor() {
        super();
        this.state = {
            note: "",
            title: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit() {
        alert(
            `Title: ${this.state.title}\n Content: ${this.state.note}`
        )
    }

    handleChange(event) {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return (
            <div style={mainContainerStyle}>
                <div className="top-navigation-container">
                    <section>
                        <Link to="/"><p className="logo">Noted</p></Link>
                        <button className="hamburger-menu-button"/>
                    </section>
                </div>

                <form className="form-container" onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        name="title"
                        value={this.state.title}
                        placeholder="Enter Title.."
                        onChange={this.handleChange}
                    />
                    <textarea
                        style={{resize: "none", height: 300}}
                        name="note"
                        value={this.state.note}
                        placeholder="Enter your text here.."
                        onChange={this.handleChange}
                    />
                    <button>Save</button>
                </form>
            </div>
        );
    }
}

export default Notes