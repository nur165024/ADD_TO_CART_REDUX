import React, {useState} from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import NavBar from './NavBar';
import {product} from '../redux/actions/productAction';
import { useParams } from 'react-router-dom';
import { addToCart } from '../redux/actions/cartAction';


// product name slug 
// const convertToSlug = (Text) => {
//     return Text.toLowerCase().replace(/ /g,'-').replace(/[^\w-]+/g,'')
// }
// console.log(convertToSlug(name))

const ProductDetails = () => {
    // product details id
    let { id } = useParams();
    // add to cart state
    const[addCart,setAddCart] = useState([]);
    // onclick increase qty
    const [qty,setQty] = useState(1);
    // product details
    const productDetails = useSelector((state) => state.productDetails);
    const {name,price,image,category} = productDetails.product;
    // add to cart redux
    const cart = useSelector((state) => state.cart);
    console.log(cart);
    // redux product details load
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(product(id))
    },[dispatch,id]);
    
    // decrease
    const decrease = () => {
        if(qty > 1) {
            return setQty(qty - 1);
        }else{
            return 0;
        }
    }

    // add to cart redux
    useEffect(() => {
        dispatch(addToCart(productDetails.product,qty))
    },[dispatch,productDetails.product,qty])

    // const handleClick = (product) => {
    //     let newCart = {
    //         id: product.id,
    //         name: product.name,
    //         image: product.image,
    //         price: product.price,
    //         category: product.category,
    //         qty: qty,
    //     }
    //     setAddCart([...addCart,newCart]);
    // }




    return (
        <>
            <NavBar></NavBar>
            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card my-3">
                                <div className="row g-0">
                                    <div className="col-md-4">
                                        <img className="img-fluid" src={image} alt="..." />
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{name}</h5>
                                            <p className="card-text">{category}</p>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="text-danger my-2">Price : ${price}</p>
                                            <div className="d-flex d-inline-block w-50 my-3 bg-secondary">
                                                <button className="btn" type="button" onClick={decrease}>-</button>
                                                    <p style={{ width:"50px",textAlign:"center",height:"40px",lineHeight:"35px" }}>{qty}</p>
                                                <button className="btn" type="button" onClick={() => setQty(qty + 1)}>+</button>
                                            </div>
                                            <button onClick={() => addToCart(productDetails.product,qty)} className="btn btn-outline-primary">Add To Cart</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductDetails;