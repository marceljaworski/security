import { useState, useEffect } from 'react';
import { register } from "../library/api";
import { useNavigate } from 'react-router-dom';
import Cookies from "js-cookie";

const inicialValues = {
  email: "",
  password: "",
  password2: "",
}
function Main(){

  const [values, setValues] = useState(inicialValues);
  // const [loggedInUser, setLoggedInUser] = useState("")
  const navigate = useNavigate()

  useEffect(()=> {
    const loggedInCookie = Cookies.get("loggedIn")
    if(loggedInCookie)
    alert("Welcome again! You are already registered");
    return navigate("/welkome")
  }, [])
      
  
  const handleInput = (event) => { 
      event.preventDefault();
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handlePost = (event) => {
    event.preventDefault();
    const newUser = values;
    if (newUser.password !== newUser.password2){
      console.error("password don't match")
    }else{
      register(values.email, values.password);
      setValues(inicialValues);
    }
  };
  
  return (  
    <div>
      
      <h1>Register</h1>
      <form>
        <input type="email" placeholder="E-Mail-Adresse" onChange={handleInput} value={values.email} name="email" />
        <input type="password" placeholder="password" onChange={handleInput} value={values.password} name="password" />
        <input type="password" placeholder="confirm your password" onChange={handleInput} value={values.password2} name="password2" />
        {/* <p className={user.password == user.password2?'error':'hidden'}>password do not match</p> */}
        <button onClick={handlePost} type="submit">Register</button>
      </form>
        
    
    </div>
  );
}
export default Main;