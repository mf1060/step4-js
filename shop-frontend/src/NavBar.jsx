//The following code uses a NavBar bootstrap Component from: 
// https://getbootstrap.com/docs/4.0/components/navbar

//The following is a link to small button at the top
//https://getbootstrap.com/docs/5.0/utilities/position/

import SearchResults from './SearchResults';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useState } from 'react';

function NavBar(props){

const [searchTerm, setSearchTerm] = useState('');

//Getting the number of items in the cart.
let numItems = 0
  props.cartItems.map((t) => {
  numItems = numItems + t.quantity
})

//Sets the search term from the input
const setSearch = () => {
  //Retrieves search term from input
   const searchTerm = document.getElementById('search').value;
   //Sets search term
   setSearchTerm(searchTerm)
}

    return(
      <>
      <nav id="nav_bar_1" class="navbar navbar-expand-lg navbar-dark">
        {/*Adds a logo with the link to the home page */}
        <a class="navbar-brand" href="/">Michael's Shop</a>
        {/*Adds a hamburger button 
           Reference: https://getbootstrap.com/docs/4.0/components/navbar/ */}
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            {/*Adding links to the home, search, and cart pages */}
            <a class="nav-item nav-link active" href="/">Home</a>
          </div>
          {/* Using a search bar with a bootstrap nav component, reference: https://getbootstrap.com/docs/4.0/components/navbar/*/}
            <input onChange={setSearch} id="search" name="search" class="form-control mr-sm-2" placeholder="Search" aria-label="Search" />
            {/*Using a magnifying glass icon: https://icons.getbootstrap.com/icons/search/ */}
            <a href={`/search/${searchTerm}`}><button id="search-icon"><i class="bi bi-search"></i></button></a>
            <a class="nav-item nav-link" href="/Cart">
            {/*Using the basket bootstrap icon: https://icons.getbootstrap.com/icons/basket/ */}
            <i class="bi bi-basket"></i>
            {/* The following code uses a Bootstrap badge component to display the 
                number of items in the shopping cart.
              Reference: https://getbootstrap.com/docs/4.0/components/badge/ */}
            {<span class="badge badge-info text-warning">{numItems}</span>}
            </a>
        </div>
      </nav>

      <div id="nav_bar_2">
        <nav id="nav-bar" class="navbar navbar-expand-lg navbar-dark">
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link">All</a>
            <a class="nav-item nav-link">Medical Care</a>
            <a class="nav-item nav-link">Best Sellers</a>
            <a class="nav-item nav-link">Books</a>
            <a class="nav-item nav-link">Today's Deals</a>
            <a class="nav-item nav-link">Gift Cards</a>
            <a class="nav-item nav-link">Sell</a>
            <a class="nav-item nav-link">Groceries</a>
            <a class="nav-item nav-link">New Releases</a>
            <a class="nav-item nav-link">Registry</a>
            <a class="nav-item nav-link">Smart Home</a>
        </div>
        </div>
        </nav>
      </div>
      </>

    )


}

export default NavBar;