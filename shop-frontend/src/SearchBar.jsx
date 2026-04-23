import React, { useState } from 'react';
import Card from './Card';

function Search(props){
  //Adds a state for all items that respond to the search results
  const [items, setItems] = useState([])

  //This is similar to the search function we developed in class. 
  const handleSearch = () => {
    //Gets the search term from the user's input in the search bar.
    const inputText = document.getElementById('search').value;
    //On change, the function would display any item that matches language in the search term.
    //Stores all items that match the search term to the items variable.
    setItems(props.allItems.filter(items => items.title.toLowerCase().includes(inputText)));
  }

  return(
    <>
    <h1>What can we help you find?</h1>
    {/*Adds a search bar */}
    <label>Search: </label>
      {/* Fires the handle search function onChange */}
      <input id="search" onChange={handleSearch} />
      {/* Displays each item responding the search */}
      <div class="row">
      {items.map((t) => {
          return (
          //Arranges cards so that there are four cards in each row in the search results.
          <div key={t.id} class="col-sm-3">
          <Card item={t} />
          </div>
        )
      })}
  
    </div>
    </>
  );
}

export default Search;