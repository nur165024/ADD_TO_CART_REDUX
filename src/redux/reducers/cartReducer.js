import { ADD_TO_CART } from "../constants/cartConstant";

export const cartReducer = (state = {cartItem: []},action) => {
    switch (action.tpye) {
        case ADD_TO_CART:
            const item = action.payload;
            const existItem = state.cartItem.find((data) => data.product === item.product);
            if (existItem) {
                return {
                    ...state,
                    cartItem: state.cartItem.map(data => data.product === existItem.product ? item : data)
                }
            }else{
                return {
                    ...state,
                    cartItem: [...state.cartItem, item]
                }
            }
        default:
            return state;
    }
}