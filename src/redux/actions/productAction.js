const getAllProducts = (products)=>{
    return{
        type:"GETALLPRODUCTS",
        payload:products
    }
}

export {getAllProducts}