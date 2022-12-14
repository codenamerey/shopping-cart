import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import './styles/ShopItem.css';

function ShopItem({updateCart, cart}) {
    const [shopItem, setShopItem] = useState({});
    const [amount, setAmount] = useState(1);
    let { id } = useParams();
    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${id}`)
        .then(response => response.json())
        .then(data => setShopItem(data));
    }, []);

    function changeInput(e) {
        setAmount(e.target.value);
    }

    function itemIsInCart(id) {
        return cart.some(cartItem => {
            return id === cartItem.id
        });
    }

    return (
        <div id="only-shop-item">
            {
            (!shopItem.image) ? <div id="loading">Loading...</div> :
            <div id="shop-item">
                <img src={shopItem.image} alt={shopItem.title} />
                <p>{shopItem.title}</p>
                <p style={{color: 'white'}}>${shopItem.price}</p>
                <label htmlFor="amount">Amount: </label>
                {!(itemIsInCart(shopItem.id)) && <input type="number" id="amount" value={amount} min={1} onChange={changeInput}/>}
                {(itemIsInCart(shopItem.id)) && <input type="number" id="amount" value={amount} min={1} disabled/>}
                {!(itemIsInCart(shopItem.id)) && <button onClick={updateCart.bind(null, {id:shopItem.id, title: shopItem.title, price: shopItem.price, amount: amount})}>Add To Cart</button>}
                {(itemIsInCart(shopItem.id)) && <button style={{background: 'green'}}>Item Added</button>}
                <q>{shopItem.description}</q>
            </div>
            }
        </div>
    )
}

export default ShopItem;