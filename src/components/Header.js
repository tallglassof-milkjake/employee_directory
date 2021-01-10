import React, { Component } from "react";
import "../styles/Header.css";

class Header extends Component {
    render() {
        return(
            <div className="header">
                <div>
                    <div>
                        <h1 className="display-1">Directory</h1>
                        <i class="far fa-address-book fa-7x mt-4"></i>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;