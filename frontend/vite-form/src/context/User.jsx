import { useEffect, useState, createContext } from "react";

export const UserContext = createContext();

function UserProvider({ children }) {
    // const [newUser, setNewUser] = useState({});
    // const [user, loginUser] = useState({});
 
    // useEffect(() => {
    //     try{
    //         fetch("http://localhost:4003/user/login",{
    //             method: 'POST',
    //             headers: {"content-Type": "application/json"},
    //             body: JSON.stringify(user) 
    //         })
    //             .then((response) => {
    //                 if (response.status === 200) {
    //                     return response.json();
    //                 }
    //                 if (response.status !== 200) {
    //                     console.error("unsuccessful login");
    //                 } 
    //             })
    //     }catch (error){
    //         console.error(error);
    //     };
        
    // }, [loginUser]);
 
    return (
        <UserContext.Provider value={{}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserProvider;
