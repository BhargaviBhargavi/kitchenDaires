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
                                
                                <div className="login">Login</div>   
                                
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
                <h2>Area Special </h2>
                
                <div className="specialfood">
                    <div className="foodImage">
                        <img src="Resources/chole-bhature-del.jpg" alt="" className="specialRecipe"/>
                        <p> Place:Delhi</p>
                        <p>Recipe Name:chole-bhature-del</p>
                    </div>
                    <div className="foodImage">
                        <img src="Resources/rasagulla.jpeg" alt="" className="specialRecipe"/>
                        <p> Place:Kolkata</p>
                        <p>Recipe Name:Rasagulla</p>
                    </div>
                    <div className="foodImage">
                        <img src="Resources/LITTI CHOKHA2.JPG" alt="" className="specialRecipe"/>
                        <p> Place:Patna</p>
                        <p>Recipe Name:Litti Chokha</p>
                    </div>
                   
                </div>
                <div className="specialFood">
                    <div className="foodimage">
                        <img src="Resources/mysore-pak.jpeg" alt="" className="specialRecipe"/>
                        <p> Place:Mysore</p>
                        <p>Recipe Name:Mysore Pak</p> 
                    </div>
                   
                    <div className="foodimage">
                        <img src="Resources/biriyani.jpg" alt="" className="specialRecipe"/>
                        <p> Place:Hyderabad</p>
                        <p>Recipe Name:Dum Biryani</p> 
                    </div>
                    <div className="foodimage">
                        <img src="Resources/meenFry.jpg" alt="" className="specialRecipe"/>
                        <p> Place:Kochi</p>
                        <p>Recipe Name:Mir</p> 
                    </div>

                </div>
                <h2>Recipes</h2>
                <div className="allRecipes">
                    <div className="foodImage">
                        <img src="Resources/Gujiya.jpg" alt="" className="specialRecipe"/>
                        <p>Recipe Name:Gujiya</p> 
                    </div>
                    <div className="foodImage">
                        <img src="Resources/bombay-potatoes.jpg" alt="" className="specialRecipe"/>
                        <p>Recipe Name:Bombay Potatoes</p> 
                    </div>
                   
                    <div className="foodImage">
                        <img src="Resources/Mutton-Kofta.jpg" alt="" className="specialRecipe"/>
                        <p>Recipe Name:Mutton-Kofta</p> 
                    </div>
                </div>
                <div className="allrecipes">
                    <div className="foodimage">
                        <img src="Resources/panipuri.jpeg" alt="" className="specialRecipe"/>
                        <p>Recipe Name:Pani Puri</p> 
                    </div>
                    <div className="foodimage">
                        <img src="Resources/putharekulu.jpg" alt="" className="specialRecipe"/>
                        <p>Recipe Name:Putharekulu</p> 
                    </div>
                    
                    <div className="foodimage">
                        <img src="Resources/kulfi.jpg" alt="" className="specialRecipe"/>
                        <p>Recipe Name:Kulfi</p> 
                    </div>
                </div>
                <h2>Trending Now</h2>
                <div className="TrendingNow">
                    <div className="foodImage">
                        <img src="Resources/Tacos.jpeg" alt="" className="specialRecipe"/>
                        <p>Recipe Name:Tacos</p> 
                    </div>
                    
                    <div className="foodImage">
                        <img src="Resources/white-chocolate-cake.jpg" alt="" className="specialRecipe"/>
                        <p>Recipe Name:White Chocolate Cake</p> 
                    </div>
                    <div className="foodImage">
                        <img src="Resources/fried-rice-soup.jpg" alt="" className="specialRecipe"/>
                        <p>Recipe Name:fried Rice Soup</p> 
                    </div>
                </div>
                <div className="Trendingnow">
                    <div className="foodimage">
                        <img src="Resources/turkey-cranberry.jpg" alt="" className="specialRecipe"/>
                        <p>Recipe Name:turkey cranberry</p> 
                    </div>
                   
                    <div className="foodimage">
                        <img src="Resources/sandwich.jpg" alt="" className="specialRecipe"/>
                        <p>Recipe Name:Sandwich</p> 
                    </div>
                    <div className="foodimage">
                        <img src="Resources/garlic-prawns.jpg" alt="" className="specialRecipe"/>
                        <p>Recipe Name:Garlic Prawns</p> 
                    </div>
                </div>
                <div className="footerpart">
                    <div className="logopart">
                        <img src="Resources/logo.png" alt="" className="footerimage"/>
                        <input type="button"  value="Sign Up" className="sign"/>
                    </div>
                    <div className="listpart">
                        <div className="types">Recipes</div>
                        <div className="types">Popural Meals</div>
                        <div className="types">Main Ingredients</div>
                        <div className="types">Healthy Food</div>
                    </div>
                    <div className="listparts">
                        <div className="types">Occation</div>
                        <div className="types">Seasonal Food</div>
                        <div className="types">About Us</div>
                    </div>
                </div>
                <div className="border">
                    <p className="follow">Follow Us</p>
                    <div className="follow">
                        <img src="Resources/google.png" className="followImg" alt=""/>
                        <img src="Resources/facebook.png" className="followImg" alt=""/>
                        <img src="Resources/insta.jpeg" className="followImg" alt=""/>
                        <img src="Resources/twitter.jpeg" className="followImg" alt=""/>
                    </div>

                </div>
    
               
            </div>
    );
}
export default homepart;