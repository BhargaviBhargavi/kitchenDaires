import React from "react";
import './Homepage.css';
function homepart()
{
    return(
        
             <div className="home">
                <div className="firstpage">
                    <div className="nav">
                        <nav className="navbar">
                            <div className="firstContainer">
                                <img src="Resources/logo.png" alt="" className="image"/>
                                <input type="text" className="searchbar" placeholder="Search here"/>
                                <img src="Resources/searchbar1.png" alt="" className="search"/>
                                <img src="Resources/loginLogo.jpeg" alt="" className="loginlogo"/>
                            </div>
                            <div className="secondContainer">
                                
                                <div class="dropdown">
                                    <button class="dropbtn">Recipes</button>
                                    <div class="dropdown-content">
                                        <a href="#">Less-Ingredient food</a>
                                        <a href="#">Pot-meal</a>
                                        <a href="#">Quick & Easy </a>
                                        <a href="#"> Time taken food</a>
                                        <a href="#">Comfort meals</a>
                                        <a href="#">Main dishes</a>
                                        <a href="#">Breakfast</a>
                                        <a href="#">Lunch</a>
                                        <a href="#">Dinner</a>
                                        <a href="#"><b>View all</b></a>
                    
                                    </div>
                                </div>
                                <div class="dropdown">
                                    <button class="drop">Popular</button>
                                    <div class="dropdownContent">
                                        <a href="#">Snacks</a>
                                        <a href="#">Dessert</a>
                                        <a href="#">Drinks</a>
                                        <a href="#">Side Dishes</a>
                                        <a href="#">Grill Recipes</a>
                                        <a href="#">Trending now</a>
                                        <a href="#">Chilli</a>
                                        <a href="#">Soups</a>
                                        <a href="#">Bread</a>
                                        <a href="#">Salad</a>
                                        <a href="#"><b>View all</b></a>
                    
                                    </div>
                                </div>
                                <div class="dropdown">
                                    <button class="drop">Main Ingredients</button>
                                    <div class="dropdownContent">
                                        <a href="#">Chicken</a>
                                        <a href="#">Seafood</a>
                                        <a href="#">Pasta </a>
                                        <a href="#">Panner</a>
                                        <a href="#">Vegetables</a>
                                        <a href="#">Lamp meat</a>
                                        <a href="#"><b>View all</b></a>
                    
                                    </div>
                                </div>
                                <div class="dropdown">
                                    <button class="drop">Healthy Food</button>
                                    <div class="dropdownContent">
                                        <a href="#">Vegetarian </a>
                                        <a href="#">Wait Watchers</a>
                                        <a href="#">Low-Card</a>
                                        <a href="#">Gluted-Free</a>
                                        <a href="#">Vegan</a>
                                        <a href="#"><b>View all</b></a>
                    
                                    </div>
                                </div>
                                <div class="dropdown">
                                    <button class="drop">Occation</button>
                                    <div class="dropdownContent">
                                        <a href="#">Festivals</a>
                                        <a href="#">Father's day</a>
                                        <a href="#">Mother's day</a>
                                        <a href="#">Graduation</a>
                                        <a href="#">Birth day</a>
                                        <a href="#">Children's functions</a>
                                        <a href="#"><b>View all</b></a>
                    
                                    </div>
                                </div>
                                <div class="dropdown">
                                    <button class="drop">Seasonal Food</button>
                                    <div class="dropdownContent">
                                        <a href="#">Winter</a>
                                        <a href="#">Summer</a>
                                        <a href="#">Spring</a>
                                        <a href="#">Fall</a>
                                        
                                    </div>
                                </div>
                                    
                                
                                <div className="topics">About Us</div>
                                    
                                
                            </div>
                        </nav>
                    </div>
                </div>
                <div class="homeImage">
                    <img src="Resources/indian-dhal.jpg" alt="" className="imageforhome"/>
                    <div className="textpart">
                        <h2>Eating is a neccesity but cooking is an Art</h2>
                        <p>You learn to cook so that you don't have to be a slave to recipes. 
                            You get what's in season and you know what to do with it.
                        </p>
                        <button className="button">View All</button>
                    </div>
                </div>
               
            </div>
    );
}
export default homepart;