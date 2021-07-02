import React from 'react';
import Product from './Product';
import NavBar from './NavBar';
import { useSelector } from 'react-redux';

const Shop = () => {
    const {productList} = useSelector((state) => state.productList);
    
    return (
        <>
            <NavBar></NavBar>
            <section>
                <div className="container">
                    <div className="row">
                        {
                            productList.map(pd => <Product key={pd.id} product={pd}></Product>)
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Shop;