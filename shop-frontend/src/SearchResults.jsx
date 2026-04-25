import Card from './Card';
import { useParams } from 'react-router-dom';

function SearchResults({allItems}){
  //Using react router to set the search term.
  // References:
  //  https://www.w3schools.com/react/react_router.asp
  //  https://reactrouter.com/api/hooks/useParams
  let params = useParams('')

  //Function for filtering items from all the items in our database
  const setSearch = () => {
    ////On change, the function would display any item that matches language in the search term.
    //Uses filter to store all items that match the search term to the items variable.
    //Uses toLowerCase to match lower case search terms to any of the items
    //Uses includes to search for items that contain the search term
   return allItems.filter(items => items.title.toLowerCase().includes(params.searchTerm));
}

  return(
    <>
      <div class="row">
      {/*Displaying a card for each search result*/}
      {setSearch().map((t) => {
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

export default SearchResults;