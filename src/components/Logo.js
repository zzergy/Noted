import React from "react";
import {Link} from "react-router-dom"

function Logo() {
const styles = {
    color: "#5293FB",
    fontSize: 29,
    padding: 0,
};

    return(
        <div style={{marginLeft: 20}}>
            <Link to="/"><h1 style={styles}>Noted</h1></Link>
        </div>
    );
}

export default Logo;