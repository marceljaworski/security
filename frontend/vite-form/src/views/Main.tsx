import { useState } from 'react';

export default function(){
    const [values, setValues] = useState({});
    

    const handleInput = (event) => {
      setValues({
        ...values,
        [event.target.name]: event.target.value,
      });
    };
    
    return (
      <div className="App">
        <header className="App-header">
          <h1>Register</h1>
          <input type="email" placeholder="E-Mail-Adresse" onChange={handleInput} value={values.email} name="email" />
          <input type="password" placeholder="pasword" onChange={handleInput} value={values.password} name="password" />
          <button type="submit">Register</button>
          <p>{values.email}, Deine E-Mail-Adresse lautet {values.password}</p>
        </header>
      </div>
    );
}