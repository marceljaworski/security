import { useState, useContext } from 'react';
import { UserContext } from "../context/User";

function Main(){
  const { user } = useContext(UserContext);
  const [values, setValues] = useState({
    name: "Test",
    email: "test@test.de",
  });
  
  const handleInput = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };
  const handlePost = () => {
    let user = values;
  };
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>Register</h1>
        <input type="email" placeholder="E-Mail-Adresse" onChange={handleInput} value={values.email} name="email" />
        <input type="password" placeholder="pasword" onChange={handleInput} value={values.password} name="password" />
        <button onClick={handlePost} type="submit">Register</button>
        <p>{values.email}, Deine E-Mail-Adresse lautet {values.password}</p>
      </header>
    </div>
  );
}
export default Main;