const URL = "http://localhost:4003/user/";
export default function register(email, password){

    try{
        fetch(`${URL}register`,{
                method: 'POST',
                headers: {"content-Type": "application/json"},
                body: JSON.stringify({
                    email : email,
                    password: password
                    }) 
            })
                .then((response) => {
                    if (response.status === 201) {
                        return response.json();
                    }
                    if (response.status !== 201) {
                        console.error("unsuccessful post");
                    } 
                })
    }catch(error){
        console.error(error)
    }
};
export default function login(email, password){

    try{
        fetch(`${URL}login`,{
                method: 'POST',
                headers: {"content-Type": "application/json"},
                body: JSON.stringify({
                    email : email,
                    password: password
                    }) 
            })
                .then((response) => {
                    if (response.status === 200) {
                        return response.json();
                    }
                    if (response.status !== 200) {
                        console.error("unsuccessful post");
                    } 
                })
    }catch(error){
        console.error(error)
    }
};

