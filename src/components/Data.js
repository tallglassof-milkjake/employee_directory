import React from "react";

function Data({ users }) {
    return (
        <tbody>
            {users[0] !== undefined && users[0].name !== undefined ? (
                users.map(({ login, name, picture, phone, email, location, id }) => {
                    return (
                        <tr key={login.uuid}>
                            <td data-th="Image" className="align-middle">
                                <img 
                                    src={picture.medium}
                                    alt={`Icon of user ${name.first} ${name.last}`}
                                    className="img-responsive"
                                />
                            </td>
                            <td data-th="Id" className="align-middle">
                                {id.value}
                            </td>
                            <td data-th="Name" className="name-cell align-middle">
                                {name.first} {name.last}
                            </td>
                            <td data-th="Location" className="align-middle">
                                {location.city}, {location.state}, {location.country} 
                            </td>
                            <td data-th="Email" className="align-middle">
                                <a href={`Email: ${email}`}>
                                    {email}
                                </a>
                            </td>
                            <td data-th="Phone" className="align-middle">
                                {phone}
                            </td>
                        </tr>
                    )
                })
            ) : (
                <></>
            )}
        </tbody>
    )
}

export default Data;