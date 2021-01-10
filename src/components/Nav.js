import React from "react";
import "../styles/Nav.css";

function Nav({ handleSearchChange }) {
    return (
        <div>
            <div className="row mt-4">
                <div className="col"></div>
                <div className="col-auto">
                    <p className="lead filter">Filter through employees.</p>
                </div>
                <div className="col"></div>
            </div>
            <div className="row">
            <div className="col"></div>
            <div className="col-auto justify-content-center">
                <form className="form-inline">
                    <input 
                        className="form-control"
                        type="search"
                        placeholder="search"
                        aria-label="search"
                        onChange={e => handleSearchChange(e)}
                    />
                </form>
            </div>
            <div className="col"></div>
        </div>
    </div>
    )
}

export default Nav;