import React from 'react';
import './HomePage.css'
function homepage()
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
                    <div className="main">
                        
                        <div className="imagepart">
                            <img src="Resources/mango.jpg" alt="" className="mango"/>
                            <div className="textpart">
                                <h2>Eating is a neccesity but cooking is an Art</h2>
                                <p>You learn to cook so that you don't have to be a slave to recipes. 
                                    You get what's in season and you know what to do with it.
                                </p>
                                <button className="button">View All</button>
                            </div>
                        </div>
                    </div>
                </div>
                <h2>Area Special </h2>
                
                <div className="specialfood">
                    <div className="foodimage">
                        <img src="Resources/chole-bhature-del.jpg" alt="" className="specialRecipe"/>
                        <p> Place:Delhi</p>
                        <p>Recipe Name:chole-bhature-del</p>
                    </div>
                    <div className="foodimage">
                        <img src="Resources/rasagulla.jpeg" alt="" className="specialRecipe"/>
                        <p> Place:Kolkata</p>
                        <p>Recipe Name:Rasagulla</p>
                    </div>
                    <div className="foodimage">
                        <img src="Resources/LITTI CHOKHA2.JPG" alt="" className="specialRecipe"/>
                        <p> Place:Patna</p>
                        <p>Recipe Name:Litti Chokha</p>
                    </div>
                    <div className="foodimage">
                        <img src="Resources/paanPetha.jpg" alt="" className="specialRecipe"/>
                        <p> Place:Agra</p>
                        <p>Recipe Name:Paan Petha</p> 
                    </div>
                </div>
                <div className="specialFood">
                    <div className="foodImage">
                        <img src="Resources/mysore-pak.jpeg" alt="" className="specialRecipe"/>
                        <p> Place:Mysore</p>
                        <p>Recipe Name:Mysore Pak</p> 
                    </div>
                    <div className="foodImage">
                        <img src="Resources/vadaPav.jpg" alt="" className="specialRecipe"/>
                        <p> Place:Mumbai</p>
                        <p>Recipe Name:Vada Pav</p> 
                    </div>
                    <div className="foodImage">
                        <img src="Resources/biriyani.jpg" alt="" className="specialRecipe"/>
                        <p> Place:Hyderabad</p>
                        <p>Recipe Name:Dum Biryani</p> 
                    </div>
                    <div className="foodImage">
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
                        <img src="Resources/kesar-peda.jpg" alt="" className="specialRecipe"/>
                        <p>Recipe Name:Kesar-Peda</p> 
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
                        <img src="Resources/fried rice.jpg" alt="" className="specialRecipe"/>
                        <p>Recipe Name:Fried rice</p> 
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
                        <img src="Resources/healthynoodles.jpg" alt="" className="specialRecipe"/>
                        <p>Recipe Name:healthy Noodles</p> 
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
                        <img src="Resources/mediterranean.jpg" alt="" className="specialRecipe"/>
                        <p>Recipe Name:Mediterranean</p> 
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
            </div>

    );
}
export default homepage;