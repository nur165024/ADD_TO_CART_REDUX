import React from 'react';
import Product from './Product';
import Data from './Data';

const Content = () => {
    return (
        <>
            <section id="content">
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

export default Content;