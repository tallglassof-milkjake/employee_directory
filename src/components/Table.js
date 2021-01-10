import React from "react";
import Data from "./Data";
import "../styles/Table.css";

function Table({ headings, users }) {
    return (
        <div className="datatable mt-5">
            <table 
                id="table"
                className="table table-hover table-striped table-condensed"
            >
                <thead>
                    <tr>
                        {headings.map(({ name, width }) => {
                            return (
                                <th
                                    className="col"
                                    key={name}
                                    style={{ width }}
                                >
                                    {name}
                                </th>
                            );
                        })}
                    </tr>
                </thead>
                <Data users={users} />
            </table>
        </div>
    )
}

export default Table;