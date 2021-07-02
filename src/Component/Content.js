import React, {useEffect} from 'react';
import Product from './Product';
import { useSelector,useDispatch } from 'react-redux';
import {productList} from '../redux/actions/productAction';

const Content = () => {
    const {loading,products} = useSelector((state) => state.productList);
    
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(productList())
    },[dispatch])
    
    return (
        <>
            <section id="content">
                <div className="container">
                    <div className="row">
                        {
                            loading ? "loading...": 
                            products.map(pd => <Product key={pd.id} product={pd}></Product>)
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Content;