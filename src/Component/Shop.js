import React,{useEffect} from 'react';
import Product from './Product';
import NavBar from './NavBar';
import { useDispatch, useSelector } from 'react-redux';
import { productList } from '../redux/actions/productAction';

const Shop = () => {
    const {loading,products} = useSelector((state) => state.productList);
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(productList())
    },[dispatch])

    return (
        <>
            <NavBar></NavBar>
            <section>
                <div className="container">
                    <div className="row">
                        {
                            loading ? "loading..." : 
                            products.map(pd => <Product key={pd.id} product={pd}></Product>)
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default Shop;