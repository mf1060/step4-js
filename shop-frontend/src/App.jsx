//Using React Router with the following reference: https://www.w3schools.com/react/react_router.asp
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ShoppingCart from './ShoppingCart';
import Search from './SearchBar';
import Home from './Home';
import NavBar from './NavBar';
import ItemPage from './ItemPage';

function App() {

  const API_URL = 'http://localhost:5000/items';
  const [allItems, setAllItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    //Fetches data from the server and 
    //stores all of the product items
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setAllItems(data))
  }, []);

  //Getting Cart Item Details
  useEffect(() => {
    fetch(API_URL)
      .then(res => res.json())
      //Retrieves only items where inCart = true
      .then(data => data.filter(i => i.inCart == true))
      //Stores all data to cart items.
      .then(items => setCartItems(items))
  })


  return (
    <>
    <BrowserRouter>
        <NavBar cartItems={cartItems}/>

      <Routes>
        {/*Creating a route for the home page */}
        <Route path="/" element={<Home allItems={allItems}/>} />
        {/*Creating a route for the search bar */}
        <Route path="/Search" element={<Search allItems={allItems}/>} />
        {/*Creating a route for the shopping cart */}
        
        <Route path="/Cart" element={<ShoppingCart cartItems={cartItems} />} />

        {/*Creating a route for an ItemPage to each item in the database */}
        {/*This will likely be implemented with a map function in the future */}
        {allItems.map((t) => (
            <Route path={`/${t.id}`} element={<ItemPage item={t} />} />  
        ))}

      </Routes>

    </BrowserRouter>
      
    </>
  )
}

export default App;
