import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = (props) => {
    return (
        <section>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-12 navBar">
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/shop">Shop</Link>
                            </li>
                            <li>
                                <Link to="/cart">
                                    Cart 
                                    <span className="badge bg-danger mx-2">{0}</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NavBar;