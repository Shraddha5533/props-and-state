/* eslint-disable react/prop-types */
import { useState } from "react";


function User({initialName}) {
    const [name, setName] = useState(initialName);

    function changeName() {
        setName("Patil");
    }

    return (
        <div className="user">
            <h1>{name}</h1>
            <button onClick={changeName}>Change Name</button>
        </div>
    );
}

export default User;
