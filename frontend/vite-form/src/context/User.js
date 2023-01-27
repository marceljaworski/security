import { useState, useEffect, createContext } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
    const [users, setUsers] = useState([]);
    console.log(users);

    useEffect(() => {
        fetch("http://localhost:4003/user/register"),{
            method: "POST",
            headers: {
                "content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email.value,
                password: password1.value
            })
        }
            .then((response) => {
                if (response.status === 201) {
                    return response.json();
                }
            })
            .then(json => setUsers(json));
        
    }, []);

    return (
        <UserContext.Provider value={{ users }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;
