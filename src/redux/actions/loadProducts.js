import axios from "axios";
import { loadProductsApi } from "../../utils/api"

export const loadProducts=()=>async(dispatch)=>{
    const getAllProducts=await axios.get(loadProductsApi());
    dispatch({
        type:"FETCH_PRODUCTS",
        payload:{
            products:getAllProducts
        }
    })
}