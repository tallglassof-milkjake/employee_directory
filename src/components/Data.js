import React from "react";

function Data({ users }) {
    return (
        <tbody>
            {users[0] !== undefined && users[0].name !== undefined ? (
                users.map(({ login, name, picture, phone, email }) => {
                    return (
                        <tr key={login.uuid}>
                            <td data-th="Image" className="align-middle">
                                <img 
                                    src={picture.small}
                                    alt={`Image of ${name.first} ${name.last}`}
                                    className="img-responsive"
                                />
                            </td>
                            <td data-th="Name" className="name-cell align-middle">
                                {name.first} {name.last}
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