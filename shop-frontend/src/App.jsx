//Using React Router with the following reference: https://www.w3schools.com/react/react_router.asp
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import React, { useState, useEffect } from 'react';
import ShoppingCart from './ShoppingCart';
import Search from './SearchBar';
import Home from './Home';
import NavBar from './NavBar';
import ItemPage from './ItemPage';
import SearchResults from './SearchResults';
import Cart from './ShoppingCart';

function App() {

  const API_URL = 'http://localhost:5000/items';
  const [allItems, setAllItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [results, setResults] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

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
        <NavBar allItems={allItems} cartItems={cartItems} 
        setResults={setResults} setSearchTerm={setSearchTerm} 
        searchTerm={searchTerm} results={results}/>

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

        <Route path={`search/?${searchTerm}`} element={<SearchResults results={results} />} />

      </Routes>

    </BrowserRouter>

    {/*Using off canvas from Bootstrap:
    https://getbootstrap.com/docs/5.3/components/offcanvas/ */}

    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <button type="button" class="btn-close" data-bs-dismiss="#my-offcanvas" aria-label="Close"></button>
        <ShoppingCart cartItems={cartItems} />
        
    </div>
      
    </>
  )
}

export default App;
