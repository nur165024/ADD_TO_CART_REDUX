import React from 'react';

const Product = (props) => {
    const {image,name,price,category} = props.product;

    const handleClick = (product) => {
        console.log(product);
    }
    return (
        <div className="col-md-3">
            <div className="card my-3">
                <img src={image} height="150px" className="card-img-top w-100" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Price : ${price}</p>
                    <p className="card-text">Category Name : {category}</p>
                    <button onClick={() => handleClick(props.product)} className="btn btn-primary mt-3">Add To Card</button>
                </div>
            </div>
        </div>
    );
};

export default Product;