import { ADD_TO_CART } from '../constants/cartConstant';

export const addToCartConstant = (product) => (dispatch,getState) => {
    dispatch({
        type: ADD_TO_CART,
        payload : {
            id: product._id,
            name: product.name,
            price: product.price,
            category: product.category,
            image: product.image,
            qty: product.qty
        }
    })      
}