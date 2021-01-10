import React, { Component } from "react";
import API from "../utils/API";
import Nav from "./Nav";
import Table from "./Table";

class Directory extends Component {
    state = {
        users: [{}],
        order: "descend",
        filteredUsers: [{}]
    }

    headings = [
        { name: "Image", width: "10%" },
        { name: "Id", width: "10%"},
        { name: "Name", width: "10%" },
        { name: "Location", width: "10%"},
        { name: "Phone", width: "10%" },
        { name: "Email", width: "10%" }
    ]

    handleSearchChange = event => {
        console.log(event.target.value);
        const filter = event.target.value;
        const filterList = this.state.users.filter(item => {
            let values = Object.values(item).join("").toLowerCase();
            return values.indexOf(filter.toLowerCase()) !== -1;
        });
        this.setState({ filteredUsers: filterList });
    }

    componentDidMount() {
        API.getUsers().then(results => {
            this.setState({
                users: results.data.results,
                filteredUsers: results.data.results
            })
        })
    }

    render() {
        return (
            <>
                <Nav handleSearchChange={this.handleSearchChange} />
                <div className="directory">
                    <Table 
                        headings={this.headings}
                        users={this.state.filteredUsers}
                    />
                </div>
            </>
        )
    }
}

export default Directory;