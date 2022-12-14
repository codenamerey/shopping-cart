import { useState } from "react";
import './styles/Cart.css';
function Cart({cart, removeFromCart}) {
    const [cartItems, setCartItems] = useState(cart);

    const orderTotal = () => {
        return cartItems.reduce((total, cartItem) => {
            return total + (cartItem.price * cartItem.amount);
        }, 0);
    }
    const increaseAmount = (id) => {
        let cartItemsReplica = cartItems.slice();

        const item = cartItemsReplica.find((cartItem) => {
            return cartItem.id == id
        });

        item.amount += 1;

        setCartItems(cartItemsReplica);
        
    }

    const decreaseAmount = (id) => {
        let cartItemsReplica = cartItems.slice();

        const item = cartItemsReplica.find((cartItem) => {
            return cartItem.id === id
        });
        if(item.amount <= 1) return;
        item.amount -= 1;

        setCartItems(cartItemsReplica);
    }

    const removeItemFromCart = (id) => {
        let cartItemsReplica = cartItems.slice();

        const item = cartItemsReplica.find((cartItem) => {
            return cartItem.id === id
        });

        cartItemsReplica.splice(cartItemsReplica.indexOf(item), 1);
        setCartItems(cartItemsReplica);        
        removeFromCart(id);
    }

    const checkOut = () => {
        alert("Thanks for your interest, but this is a fake store.");
    }

    return (
        <div className="cart">
            <ul>
                {
                    cartItems.map((cartItem) => {
                        return <li key={cartItem.id}>
                            <h3>{cartItem.title}</h3>
                            <p>${cartItem.price}</p>
                            <label htmlFor="amount">Amount:</label>
                             <div className="amount" id="amount"> <button onClick={decreaseAmount.bind(null, cartItem.id)}>&lt;</button> {cartItem.amount} <button onClick={increaseAmount.bind(null, cartItem.id)}>&gt;</button></div>
                             <button id="x-button" onClick={removeItemFromCart.bind(null, cartItem.id)}>X</button>
                             </li>
                    })
                }
            </ul>
            {(cartItems.length) && <p>Total: {orderTotal()}</p>}
            {(!cartItems.length) && <p>No items yet.</p>}
            <button id="checkout-button" onClick={checkOut}>Checkout</button>
        </div>
    )
}

export default Cart;