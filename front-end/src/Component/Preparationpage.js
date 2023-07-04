import  React from "react";
import './Preparationpage.css';
function prepationpart(){
    return(
            <div>
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
                                <div className="homepg">Home</div>
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
                <div className="howToPrepare">
                    <div className="preparefood">
                        <div className="foodName"><b> Bengali Dhal</b></div>
                        <div className="stars">
                            <img src="Resources/star.png " alt="" className="star"/>
                            <img src="Resources/star.png " alt="" className="star"/>
                            <img src="Resources/star.png " alt="" className="star"/>
                            <img src="Resources/star.png " alt="" className="star"/>
                            <img src="Resources/star.png " alt="" className="star"/>
                            <a href="#" className="review">Reviews</a>
                        </div>
                        <div className="experience">
                            Here is my recipe for dhal based on my many experiences cooking 
                            with my friends over the years. We love this served over freshly 
                            made basmati rice. Don't skimp on the caramelized onions and garlic 
                            — it totally makes this recipe amazing!
                        </div>
                        <div className="buttons">
                            <button className="button">Save </button>
                            <button className="ratebutton">Rate </button>
                            <button className="sharebutton">Share</button>
                        </div>
                        <img src="Resources/indian-dhal.jpg" alt="" className="imageforhome"/>
                        <div className="timetaken">
                            <div className="time">
                                <div className="preptime"><b>Prepare Time:</b><br /> 15mins</div>
                                <div className="preptime"><b>Cooking Time:</b><br /> 30mins</div>
                                <div className="preptime"><b>Total Time:</b><br /> 45mins</div>
                            </div>
                            <div className="preptime"><b>Servings:</b><br /> 4</div>
                            <div className="line">________________________________________________________________________________________</div>
                            <a href="" className="jump">Jump to Nutrition Facts </a>
                        </div>
                        <div className="ingredients"><b>Ingredients</b>
                        <ul>
                            <li>1 cup red lentils</li>
                            <li>3 cups water</li>
                            <li>1 cup onion, thinly sliced, divided</li>
                            <li>4 cloves garlic, coarsely chopped, divided</li>
                            <li>½ teaspoon ground turmeric</li>
                            <li>1 bay leaf</li>
                            <li>¾ cup cherry tomatoes</li>
                            <li>½ teaspoon salt</li>
                            <li>2 (2 inch) whole serrano chile peppers (Optional)</li>
                            <li>1 tablespoon vegetable oil</li>
                            <li>2 tablespoons chopped cilantro</li>

                        </ul>
                        </div>
                        <div className="ingredients"><b>Directions</b></div>
                        <div className="step"><b>Step1</b></div>
                        <div className="lines">Wash lentils in a strainer. Combine lentils and water 
                            in a saucepan over medium-high heat. Add 1/2 of the sliced
                             onions and garlic, reserving the rest for later. Stir in turmeric, 
                             bay leaf, tomatoes, and salt. Add chiles, leaving them whole to add
                              flavor or cut in half to add heat. When mixture begins to boil, 
                              reduce heat to a simmer; cook until lentils break apart and
                               thicken slightly, about 20 minutes. </div>
                        <div className="step"><b>Step2</b></div>
                        <div className="lines">Meanwhile, in a skillet, heat vegetable oil over medium heat until
                             oil shimmers. Add reserved sliced onions; cook and stir until 
                             onion has softened and translucent, about 5 minutes. Reduce 
                             heat to medium-low; continue cooking and stirring until onion 
                             is very tender and dark brown, 15 to 20 minutes more. Stir in 
                             reserved garlic and cook, stirring constantly, until garlic is 
                             fragrant and tender, about 2 minutes. </div>
                        <div className="step"><b>Step3</b></div>
                        <div className="lines">Add onion-garlic mixture into cooked lentils and 
                        stir. Garnish with chopped cilantro. </div>

                    </div>
                    <div className="ingredients"><b>Nutrition Facts</b>
                        <div className="facts">
                            <div className="preptime"><b>224</b><br /> Calories</div>
                            <div className="preptime"><b>4g</b><br /> Fat</div>
                            <div className="preptime"><b>34g</b><br /> Carbs</div>
                            <div className="preptime"><b>13g</b><br /> Protein</div>
                        </div>
                        <div className="nutrition">show more nutrition facts</div>
                    </div>
                    <div className="ingredients"><b>Reviews</b>
                        <div className="addRate">
                                <div className="addReview">
                                    <img src="Resources/rating.png" alt="" className="ratingImg"/>
                                    <div className="para">What do you think of this recipe?<br/> Share your experience to help others. </div>
                                    <button className="addrating">ADD RATING & REVIEW</button>
                                    <div className="line">_________________________________________</div>
                                    <div className="para">Most helpful positive review </div>
                                    <div className="profile">
                                        <img src="Resources/loginLogo.jpeg" alt="" className="dp"/>
                                        <div className="name">bhargavi</div>
                                        <div className="date">17/06/2023</div>
                                    </div>
                                    <div className="ratings">
                                        <img src="Resources/star.png " alt="" className="star"/>
                                        <img src="Resources/star.png " alt="" className="star"/>
                                        <img src="Resources/star.png " alt="" className="star"/>
                                        <img src="Resources/star.png " alt="" className="star"/>
                                        <img src="Resources/star.png " alt="" className="star"/>
                                        
                                    </div>
                                    <div className="comments">These were surprisingly excellent! I 
                                    am on Weight Watchers and was looking for a healthier alternative 
                                    to traditional pancakes. Using solely whole wheat flour 
                                    (eliminated the all-purpose flour) gave these a nuttier flavor,
                                    but they were so light and fluffy. I substituted 1/4 cup unsweetened 
                                     
                                    applesauce for the butter and used 1/4 cup + 2 tbsp. Splenda instead
                                    of sugar. I used skim milk instead of the dry milk powder and water
                                    and also added 2 tsp. flax seed and 1/2 tsp. vanilla. If the batter 
                                       
                                    is too runny, it can be thickened with a little extra flour. These 
                                    freeze and reheat very well for a quick and filling breakfast. Great
                                    with no-sugar maple syrup and turkey sausage links!!</div>
                                    <div className="line">_________________________________________</div>
                                    <div className="profile">
                                        <img src="Resources/loginLogo.jpeg" alt="" className="dp"/>
                                        <div className="name">bhargavi</div>
                                        <div className="date">17/06/2023</div>
                                    </div>
                                    <div className="ratings">
                                        <img src="Resources/star.png " alt="" className="star"/>
                                        <img src="Resources/star.png " alt="" className="star"/>
                                        <img src="Resources/star.png " alt="" className="star"/>
                                        <img src="Resources/star.png " alt="" className="star"/>
                                        <img src="Resources/star.png " alt="" className="star"/>
                                        
                                    </div>
                                    <div className="comments">I made these exactly as the recipe 
                                    states only I didn't add the butter-the batter was so thin 
                                    and watery. I added a whole extra cup of whole wheat flour 
                                    and it was still super thin. I can't imagine how it would be 
                                    if I had added the fourth cup of butter. They didn't taste bad 
                                    though but it took forEVER to make them all. If I try it again 
                                    I'll probably cut the water way down. Also I measure flour with 
                                    a scale rather than using measuring cups so that may have had 
                                    something to do with it. </div>
                                </div>

                        </div>
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
export  default prepationpart;