import { combineReducers } from 'redux'
import { getAllProductsReducer } from './productReducer' 


const reducers = combineReducers({
    allProducts:getAllProductsReducer
})


export {reducers}