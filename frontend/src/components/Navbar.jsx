import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { Badge } from 'react-bootstrap';
import Modal from '../Modal';
import Cart from '../screens/cart';
import { useCart } from './Context_Reducer';
const Navbar = () => {
    let data = useCart();
    const [cartview, setcartview] = useState(false);

    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleNavbar = () => {
        setIsCollapsed(!isCollapsed);
    };

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/");
    }
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-success">
                <Link className="navbar-brand fs-1 fst-italic" to="#">GoFood</Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    onClick={toggleNavbar}
                    aria-controls="navbarNav"
                    aria-expanded={!isCollapsed}
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse p-2 navbar-collapse ${!isCollapsed ? 'show' : ''}`} id="navbarNav">
                    <ul className="navbar-nav me-auto mb-2">
                        <li className="nav-item ">
                            <Link className="nav-link active fs-5" to="/">Home </Link>
                        </li>
                        {
                            localStorage.getItem("token") ?
                                <li className="nav-item ">
                                    <Link className="nav-link active fs-5" to="/myorder">My Orders </Link>
                                </li> : ""
                        }

                    </ul>
                    {!localStorage.getItem("token") ?
                        <div className="d-flex">
                            <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
                            <Link className="btn bg-white text-success mx-1" to="/signup">Sign Up</Link>
                        </div>
                        :
                        <div className="d-flex">

                            <div className="btn bg-white text-success mx-2" onClick={() => setcartview(true)} >
                            My Cart <Badge pill bg="danger"> {data.length} </Badge>
                            </div>
                            {cartview ? <Modal onClose={() => setcartview(false)} > <Cart /> </Modal> : ""}

                            <div className="d-flex">
                                <Link className="btn bg-white text-danger mx-2" to="/" onClick={handleLogout}>Logout</Link>
                                {/* here we can use to='/' but it executes only on the link not on the whole button so its better to use navigate in the onclick function */}
                            </div>

                        </div>
                    }
                </div>
            </nav>
        </div>
    )
}

export default Navbar 
