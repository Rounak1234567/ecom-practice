const initial = {
    products:[]
}


const getAllProductsReducer = (state=initial, action)=>{
    switch (action.type) {
        case "GETALLPRODUCTS":
            return {...state, products:action.payload};
        case "FETCHPRODUCTS" :
            return {...state, products:action.payload}
        default:
            return state;
    }
}


export {getAllProductsReducer}