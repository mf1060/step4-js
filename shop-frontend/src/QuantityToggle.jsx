import React, { useState } from 'react';
//The following component is an incrementer/decrementer for each cart item
function QuantityToggle(props){
    //Sets the url for the server
    const API_URL = 'http://localhost:5000/items';
    //Sets states for the quantity
    const [quantity, setQuantity] = useState(props.quantity);

    //Defines Bootstrap icons for the trash can, minus sign, and plus buttons
    //Reference: https://icons.getbootstrap.com/
    const icons ={
        "trashCan": <i class="bi bi-trash"></i>,
        "minusSign": <i class="bi bi-dash"></i>,
        "plusSign": <i class="bi bi-plus"></i>
    }

    //Function for updating the server when users add or substract items
    const updateCart = (id, quantityVar) => {
    
    //Sets the quantity
    setQuantity(quantityVar)
    
    //Creates an empty update object that will be passed to a PATCH request to the server
    let update = {}
    
    //If a user removes an item entirely from the cart
    if (quantityVar == 0){
        //Set quantity=0 and inCart = false
        update = {
            'quantity': quantityVar,
            'inCart': false
        }
    //If a user adds an item to the cart that was not previously added
    } else if (quantityVar == 1) {
        //Set quantity=1 and inCart = true
        update = {
            'quantity': quantityVar,
            'inCart': true
        }
    // For all other situations, update the number of items selected in the server.
    } else {
        update = {'quantity': quantityVar}
    }

    //Sends the update to the server.
    fetch(`${API_URL}/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(update),
    });

    }

    //Defines a function for displaying the buttons for toggling quantity based on the number of that item
    //in the cart.
    const returnResult = () => {
    
    //If the item is not in the cart.
    if (quantity <= 0){
        //Only displays the "Add to Cart button"
        return <button data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight" onClick={() => {updateCart(props.id, 1)}} class="btn btn-primary">Add to Cart</button>

    } else {
        //Adds the incrementer and decrementer buttons with the quantity of the item in the middle. 
        return (

            //Using Bootstrap Tables to create spacing for the buttons
            //Reference: https://getbootstrap.com/docs/4.0/content/tables/
        
            <table class="table">
                <tbody>
                <tr>
                <td>
                {/*The Decrementer Button: if there is only one item in the cart, the button icon is a trash can */}
                <button onClick={() => {updateCart(props.id, quantity-1)}}>
                    {quantity > 1 ? icons.minusSign : icons.trashCan}
                </button>
                </td>
                
                {/*Displays quantity between each button*/}
                <td>
                <p>{quantity}</p>
                </td>

                {/*The Incrementer Button: Uses a plus sign for the icon */}
                <td>
                <button onClick={() => {updateCart(props.id, quantity+1)}}>
                    {icons.plusSign}
                </button>
                </td>
                </tr>
                </tbody>
            </table>
        );

    }};

return (
    <>
    {returnResult()}
    </>

    ); 


}

export default QuantityToggle;