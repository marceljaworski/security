import { BrowserRouter, Route, Routes} from "react-router-dom";

import Main from "./views/Main";
import Login from "./views/Login";
import Welkome from "./views/Welkome";
import Header from "./components/Header";
import UserProvider from "./context/User"
function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <UserProvider>
          <Routes>
              <Route path="/user/register" element={<Main />} />
              <Route path="/user/login" element={<Login />} />
              <Route path="/user/welkome" element={<Welkome />} />
          </Routes>
        </UserProvider>
      </BrowserRouter>
    </div>
  )
}

export default App