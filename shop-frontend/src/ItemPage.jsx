import Card from './Card';
import QuantityToggle from './QuantityToggle';

//This is the component for each individual item page.
function ItemPage(props){
    //Creates a state variable for the data related to the item
    
    return (
        <>
         {/*Uses a side-by-side layout with the following reference: https://getbootstrap.com/docs/4.0/layout/grid/ */}
        <div class = "container">
           <div class="row">
            <div class="col">
                <h1>{props.item.title}</h1>
                <p>{props.item.description}</p>
            {/*Adds the card for each item */}
             </div>
                <div class="col">
                    <Card item={props.item} />
                </div>
            </div>   
        </div>
        </>
    )


}

export default ItemPage;