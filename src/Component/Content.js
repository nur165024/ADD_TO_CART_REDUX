import React from 'react';
import Product from './Product';
import { useSelector } from 'react-redux';

const Content = () => {
    const {productList} = useSelector((state) => state.productList);
    
    return (
        <>
            <section id="content">
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

export default Content;