import React from "react";
import './ForgotPassword.css';
function forgotpassword(){
    return(
        <div className="main">
            <div className="details">
                <div className="userName">User Name</div>
                <div><input type="text" placeholder="Enter your User Name"/></div>
                <div className="text">New Password</div>
                <div><input type="password" placeholder="Enter your New Password"/></div>
                <div class="text">Confirm Password</div>
                <div><input type="password" placeholder="Enter your confirm Passwowrd"/></div>
                <button className="button">Update</button>
            </div>
        </div>
    );
}
export default forgotpassword;


