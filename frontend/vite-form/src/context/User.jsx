import { useEffect, useState, createContext } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
    const [user, setNewUser] = useState({});
    useEffect(() => {
        fetch("http://localhost:4003/user/register",{
            method: 'POST',
            headers: {"content-Type": "application/json"},
            body: JSON.stringify(user) 
        })
            .then((response) => {
                    if (response.status === 201) {
                        return response.json();
                    }
                    if (response.status !== 201 ){
                            console.error("unsuccessful post")
                        } 
                })
        
    }, [user]) 
 
    // useEffect(() => {
    //     fetch("http://localhost:4003/user/register"),{
    //         method: "POST",
    //         headers: {
    //             "content-Type": "application/json"
    //         },
    //         body: JSON.stringify({
    //             email: email.value,
    //             password: password1.value
    //         })
    //     }
    //         .then((response) => {
    //             if (response.status === 201) {
    //                 return response.json();
    //             }
    //         })
    //         .then(json => setUsers(json));
        
    // }, []);

    return (
        <UserContext.Provider value={{ setNewUser }}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;
