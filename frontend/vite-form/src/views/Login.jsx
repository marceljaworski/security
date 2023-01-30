// import { useState, useContext } from 'react';
// import { UserContext } from "../context/User";
// function Login() {
//   const { loginUser } = useContext(UserContext);
//   const [values, setValues] = useState({});
//   const handleInput = (event) => {
//       event.preventDefault();
//     setValues({
//       ...values,
//       [event.target.name]: event.target.value,
//     });
//   };
//   const handlePost = () => {
//     const user = values;
//     loginUser(user);
//     setValues({});
//     // if (user.password !== user.password2){
//     //   console.error("password don't match")
//     // }else{
//     //   loginUser(user);
//     //   setValues({});
//     // }
//   };
//   return (
//     <div>
      
//       <h1>Login</h1>
//       <form>
//         <input type="email" placeholder="E-Mail-Adresse" onChange={handleInput} value={values.email} name="email" />
//         <input type="password" placeholder="password" onChange={handleInput} value={values.password} name="password" />
        
//         <button onClick={handlePost} type="submit">Register</button>
//       </form>
        
    
//     </div>
//   )
// }

// export default Login