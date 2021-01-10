import React, { Component } from "react";
import "../styles/Header.css";

class Header extends Component {
    render() {
        return(
            <div className="header">
                <h1 className="display-1">Employee Directory</h1>
            </div>
        )
    }
}

export default Header;