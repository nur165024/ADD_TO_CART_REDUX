import Data from "../../Component/Data";
import { PRODUCT_DETAILS_FAIL, PRODUCT_DETAILS_REQUEST, PRODUCT_DETAILS_SUCCESS, PRODUCT_FAIL, PRODUCT_REQUEST, PRODUCT_SUCCESS } from "../constants/productConstant"

export const productList = () => async (dispatch) => {
    dispatch({
        type: PRODUCT_REQUEST,
    });
    
    try {
        const data = Data;
        dispatch({
            type: PRODUCT_SUCCESS,
            payload: data
        })
    } catch (error) {
        dispatch({
            type: PRODUCT_FAIL,
            payload: error.message
        })
    }
}

export const product = (id) => (dispatch) => {
    dispatch({
        type: PRODUCT_DETAILS_REQUEST
    });

    try {
        const produtDetails = Data.find((data) => data.id >= id)
        dispatch({
            type: PRODUCT_DETAILS_SUCCESS,
            payload: produtDetails
        });
    } catch (error) {
        dispatch({
            type: PRODUCT_DETAILS_FAIL,
            payload: error.message 
        });
    }
}