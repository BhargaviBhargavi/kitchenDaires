import React from 'react';
import  './Login.css';
function login(){
    return(
        <div class="main">
            <div class="details">
                <div className="userName">User Name</div>
                <div><input type="text" placeholder="Enter your User Name"/></div>
                <div className="text">Password</div>
                <div><input type="password" placeholder="Enter your password"/></div>
                <button className="button">Login</button>
                <div class="nextPage">
                    <div><p><span>forgotPassword</span></p></div>
                    <div><p><span>SignUp</span></p></div>
                </div>
            </div>

        </div>

    );
}
export default login;


