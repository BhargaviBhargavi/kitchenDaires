import React from "react";

import { useEffect, useState } from "react";
import './backEnd.css';


const Backend = () => {
    const [data, setrecipeData] = useState([]);
    const [recipeData,setData]= useState('');

    useEffect(()=> {
        fetchData();
        

    },[])

    const fetchData = () =>{
        fetch("http://localhost:5050/data").then((res)=>{
            return res.json();
        }).then((res)=>{
            setrecipeData(res);
            console.log(res);
        })
    }
    const searchrecipedata = () =>{
        fetch(`http://localhost:5050/search/${recipeData}`).then((res)=>{
            return res.json();
        }).then((res)=>{
            setrecipeData(res);
            console.log(res);

        })
    }

    const recipechange =(event) =>{
        setData(event.target.value);
    }
    function clearData(){
        setData("");
    }
    

    return (<div>

            <div className="home">
                <div className="firstpage">
                    <div className="nav">
                        <nav className="navbar">
                            <div className="firstContainer">
                                <img src="Resources/logo.png" alt="" className="image"/>
                        
                                <input type="text" className="searchbar" placeholder="Search here" value={recipeData} onChange={recipechange}/>
                                <img src="Resources/searchbar1.png" alt="" className="search" onClick={clearData}/>

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
                                        <a href="#">Trending now</a>
                                        <a href="#">Soups</a>
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
            </div>
       
        <div className="heading"><h1>Recipes</h1></div>
        
        <div className="recipes">
        {
            
            (data.filter(function (e) {
                if (e.RecipeName.toLocaleLowerCase().includes(recipeData.toLocaleLowerCase())) {
                    return data;
                }
            }).map(({Image, RecipeName,Rating }) =>
             <div>
                <div className="recipe">
                    <div><img src={Image} alt="" className="images"/></div>
                    <div className="recipeName"><h2>{RecipeName}</h2></div>
                    <div className="name"><b>Rating:</b>{Rating}</div>
                </div>
        
            </div>))
            
        }
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
    </div>)
}
export default Backend;
