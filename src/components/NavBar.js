import { Link } from "react-router-dom";
import './styles/NavBar.css';

function NavBar({cart}) {
    return (
        <header>
            <h1>FakeStore</h1>
            <nav>
                <ul>
                    <Link to="/">
                        <li>Home</li>
                    </Link>
                    <Link to="/shop">
                        <li>Shop</li>
                    </Link>
                    {(!!cart.length) && 
                    <Link to="/cart">
                        <li style={{color: 'goldenrod'}}>Cart: {cart.length}</li>
                    </Link>
                    }
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;