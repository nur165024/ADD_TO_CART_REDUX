import React, { useState } from 'react';
import { connect } from 'react-redux';
import NavBar from './NavBar';

const Cart = (props) => {
    const {cart} = props;
    
    const [number,setNumber] = useState(1);
    
    const decrease = () => {
        if(number > 1) {
            return setNumber(number - 1); 
        }else{
            return 0;
        }
    }

    return (
        <>
            <NavBar></NavBar>
            <section>
                <div className="container">
                    <div className="row">
                        {/* {
                            cart.length === 0 ? "Your Cart is Impty" : 
                            cart.map(cd => 
                                <div key={cd.id} className="col-md-12">
                                    <div className="card my-3">
                                        <div className="row g-0">
                                            <div className="col-md-4">
                                                <img className="img-fluid" src={cd.image} alt="..." />
                                            </div>
                                            <div className="col-md-8">
                                                <div className="card-body">
                                                    <h5 className="card-title">{cd.name}</h5>
                                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                                    <button className="btn" type="button" onClick={decrease}>-</button>
                                                        <input type="text" id="number" value={number} /> 
                                                    <button className="btn" type="button" onClick={() => setNumber(number + 1)}>+</button>
                                                    <br />
                                                    <br />
                                                    <button className="btn btn-outline-primary">remove</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        } */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Cart;