//Imports the incrementer/decrementer for quantity
import QuantityToggle from "./QuantityToggle";

function Item(props) {

    return(
    //Uses the Bootstrap "card" Component to describe each product item.
    //Reference: https://getbootstrap.com/docs/5.3/components/card/
    <div class="card">
        {/*Passes in data dynamically for the image and the alt text */}
        <a href={`/${props.item.id}`}><img class="card-img-top" src={props.item.img} alt={props.item.altImg} /></a>
        <div class="card-body">
            {/*Adds a link to each item's page based on id number */}
            <a href={`/${props.item.id}`}><h5 class="card-title">{props.item.title}</h5></a>
            {/*Adds in the price for each item */}
            <p class="card-text">$ {parseFloat(props.item.price).toFixed(2)}</p>
            {/*Adds the incrementer/decrementer passing in item id and the quantity for each item */}
            <QuantityToggle id = {props.item.id} quantity={props.item.quantity} />
        </div>
  </div>
  )

}

export default Item;