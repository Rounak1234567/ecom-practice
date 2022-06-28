import axios from "axios"




const getAllProducts = (products)=>{
    return{
        type:"GETALLPRODUCTS",
        payload:products
    }
}


const fetchProducts = ()=> async (dispatch)=>{
    const res = await axios.get("https://fakestoreapi.com/products");
    dispatch({
        type:"FETCHPRODUCTS",
        payload: res.data
    })
};


export {getAllProducts, fetchProducts}