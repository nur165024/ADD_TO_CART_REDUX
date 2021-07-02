import { ADD_TO_CART } from "../constants/cartConstant"

const addToCart = (product,qty) => (dispatch,getState) => {
    dispatch({
        type: ADD_TO_CART,
        payload: {
            name: product.name,
            image: product.image,
            category: product.category,
            price: product.price,
            qty,
        }
    })
}