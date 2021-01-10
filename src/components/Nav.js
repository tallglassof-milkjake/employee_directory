import React from "react";

function Nav({ handleSearchChange }) {
    return (
        <nav className="navbar navbar-expand navbar-dark bg-light">
            <div className="navbar-collapse row" id="navbarNav">
                <div className="searchbox">
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
            </div>
        </nav>
    )
}

export default Nav;