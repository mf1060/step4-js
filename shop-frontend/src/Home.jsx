import Carousel from "./Carousel";
import Card from './Card';

function Home(props){

    return(
        <>
        <h1>Welcome to Michael's Shop!</h1>
            {/* Using Bootstrap "lead" class for typography, reference: https://getbootstrap.com/docs/4.0/content/typography/#lead */}
            <p class="lead">Check out our featured items below!</p>
            <p class="lead">
                {/* Adds a button for the search page */}
                <a class="btn btn-primary btn-lg" href="/Search" role="button">Search</a>
            </p>
            {/* Adds the Carousel Component */}
            <Carousel allItems = {props.allItems}/>
            <div class="row">

        <h1>Featured Items</h1>
        
      {props.allItems.map((t) => {
          return (
          //Arranges cards so that there are four cards in each row in the search results.
          <div key={t.id} class="col-sm-3">
          <Card item={t} />
          </div>
        )})}
        </div>
        </>
    )

}

export default Home;