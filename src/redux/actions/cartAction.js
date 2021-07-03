import { ADD_TO_CART } from "../constants/cartConstant"

export const addToCart = (product,qty) => (dispatch,getState) => {
    let {name,image,category,price} = product;
    dispatch({
        type: ADD_TO_CART,
        payload: {
            name: name,
            image: image,
            category: category,
            price: price,
            qty: qty,
        }
    })
}