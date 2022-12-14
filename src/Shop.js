import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import './components/styles/Shop.css';

function Shop() {
    let [shopItems, setShopItems] = useState([]);

    useEffect(() => {
        try {
            fetch('https://fakestoreapi.com/products?limit=10')
            .then(response => response.json())
            .then(data => setShopItems(data));
        }
        catch {
            throw new Error('Can not fetch fakestoreapi.com');
        }
    }, []);

    return (
        <div id="shop">
            <h1>Shop Page</h1>
            {
                (!shopItems.length) && <div>Loading shop items...</div>
            }
            <div className="shop-items">
                {
                    shopItems.map((shopItem) => {
                        return (
                
                            <div className="shop-item" key={shopItem.id}>
                                <Link to={`/shop/${shopItem.id}`}>
                                    <div><img src={shopItem.image} alt={shopItem.title} /></div>
                                    <p>{shopItem.title}</p>
                                </Link>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
export default Shop;