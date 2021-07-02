import { ADD_TO_CART } from "../constants/cartConstant";


export const cartReducer = (state = { cartItems: [] }, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const item = action.payload;
            const existItem = state.cartItems.find(data => data.product === item.product);
            if (existItem) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((data) => data.product === existItem.product ? item : data)
                }
            }else{
                return {
                    ...state,
                    cartItems : [...state.cartItems, item]
                }
            }
        default:
            return state;
    }
}