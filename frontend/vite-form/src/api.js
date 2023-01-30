const URL = "http://localhost:4003/";
export default function register(email, password){

    try{
        fetch(`${URL}user/register`,{
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
