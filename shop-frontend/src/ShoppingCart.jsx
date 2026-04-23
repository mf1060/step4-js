import QuantityToggle from './QuantityToggle';

function Cart(props){
    
  let cartTotal = 0
  
  props.cartItems.map((t) => {
      cartTotal += (t.price * t.quantity)
  })
  
    return (

      //Using Bootstrap Tables to create spacing for the Cart Items
      //Reference: https://getbootstrap.com/docs/4.0/content/tables/
      <div id="cart">
        <h1>Cart</h1>
        <table class="table">
        <thead>
          <tr>
            <th scope="col">Item</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {props.cartItems.map((t) => (
            <tr key={t.id}>
              {/*Adds a link to each item page for the title */}
              <td><a href={`/${t.id}`}>{t.title}</a></td>
              <td><QuantityToggle id = {t.id} quantity={t.quantity}/> </td>
            </tr>  
    
        ))
        
        }
        </tbody>
      </table>
    
    {/*Adds a total at the bottom of the page */}
    <p>Total: ${cartTotal.toFixed(2)}</p>
    </div>
    )
}

export default Cart;