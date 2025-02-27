import {combineReducers} from '@reduxjs/toolkit'
import productsReducer from './reducers/products'
import { loaderReducer } from './reducers/loader';
const rootReducer=combineReducers({
    products:productsReducer,
    loader:loaderReducer
})

export default rootReducer; 