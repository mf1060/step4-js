import Carousel from "./Carousel";

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
        </>
    )

}

export default Home;