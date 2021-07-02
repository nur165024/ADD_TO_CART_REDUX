import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import Data from "../../Component/Data";
import { cartReducer } from "../reducers/cartReducer";

const initialState = {};

const reducer = combineReducers({
    cart: cartReducer,
    productList: () => {
        return {productList : Data} 
    },
});
// const reducer = (state,action) => {
//     return {productList : Data}
// }
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer,initialState,composeEnhancer(applyMiddleware(thunk)));

export default store;