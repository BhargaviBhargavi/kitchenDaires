import React from 'react';
import './HomePage.css'
function homepage()
{
    return(
        <div className="main">
            <div className="home">
                <nav className="navbar">
                    <div className="firstContainer">
                        <img src="Resources/logo.png" alt="" className="image"/>
                        <input type="text" className="searchbar" placeholder="Search here"/>
                        <img src="Resources/searchbar1.png" alt="" className="search"/>
                        <img src="Resources/loginLogo.jpeg" alt="" className="loginlogo"/>
                    </div>
                    <div className="secondContainer">
                        <div className="recipes">Recipes</div>
                        <div className="topics">Popular Meals</div>
                        <div className="topics">Main Ingredients</div>
                        <div className="topics">Healthy Food</div>
                        <div className="topics">Occation</div>
                        <div className="topics">Seasonal Food</div>
                        <div className="topics">About Us</div>
                    </div>
                </nav>
                
            </div>
        </div>
    );
}
export default homepage;