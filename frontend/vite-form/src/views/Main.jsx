import { useState, useContext } from 'react';
import { UserContext } from "../context/User";

function Main(){
  const { setNewUser } = useContext(UserContext);
  const [values, setValues] = useState({});
  
  const handleInput = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handlePost = () => {
    const user = values;
    setNewUser(user);
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Register</h1>
        <input type="email" placeholder="E-Mail-Adresse" onChange={handleInput} value={values.email} name="email" />
        <input type="password" placeholder="password" onChange={handleInput} value={values.password} name="password" />
        <button onClick={handlePost} type="submit">Register</button>
        <p>{values.email}</p>
      </header>
    </div>
  );
}
export default Main;