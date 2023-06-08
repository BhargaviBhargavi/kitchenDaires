
import './App.css';
import React from "react";
import SignUp from './Component/SignUp';
import Login from './Component/Login';
import ForgotPassword from './Component/ForgotPassword';
function App() {
  return(
    <div className="App">
           <SignUp/>
            {/* <Login/>  
            <ForgotPassword/>  */}
    </div>
  );
}

export default App;

