import React from 'react';
import Product from './Product';
import NavBar from './NavBar';
import Data from './Data';

const Shop = () => {
    return (
        <>
            <NavBar></NavBar>
            <section>
                <div className="container">
                    <div className="row">
                        {
                            Data.map(pd => <Product key={pd.id} product={pd}></Product>)
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Shop;