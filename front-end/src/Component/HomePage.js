import React from 'react';
import './HomePage.css'
function homepage()
{
    return(
        <div className="main">
            <div className="home">
                <nav className="navbar">
                    <img src="Resources/logo.png" alt="" className="image"/>
                    <div className="recipes">Recipes</div>
                    <div className="topics">Popular Meals</div>
                    <div className="topics">Main Ingredients</div>
                    <div className="topics">Healthy Food</div>
                    <div className="topics">Occation</div>
                    <div className="topics">Seasonal Food</div>
                </nav>
                
            </div>
        </div>
    );
}
export default homepage;