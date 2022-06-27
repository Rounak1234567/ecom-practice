const initial = {
    products:[{
        id:1,
        name:"dsfmjb"
    }]
}


const getAllProductsReducer = (state=initial, action)=>{
    switch (action.type) {
        case "GETALLPRODUCTS":
            return {...state, products:action.payload};
        default:
            return state;
    }
}


export {getAllProductsReducer}