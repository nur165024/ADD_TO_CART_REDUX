import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "../constants/productConstant";

export const productListReducer = (state = { products : [] },action) => {
    switch (action.type) {
        case PRODUCT_REQUEST:
            return {loading: true};
        case PRODUCT_SUCCESS:
            return {loading: false, products: action.payload};
        case PRODUCT_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}

export const productDetailsReducer = (state = {product:[]}, action) => {
    switch (action.type) {
        case PRODUCT_DETAILS_REQUEST:
            return {loading: true};
        case PRODUCT_DETAILS_SUCCESS:
            return {loading: false, product: action.payload};
        case PRODUCT_DETAILS_FAIL:
            return {loading: false, product: action.payload};
        default:
            return state;
    }
}