import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { getAllProducts } from "../redux/actions/productAction";
import axios from "axios"



const AllProducts=()=>{

    const products = useSelector((state)=>state.allProducts.products)
    console.log(products)

    const dispatch = useDispatch();

    useEffect(()=>{
        axios.get("https://fakestoreapi.com/products").then((res)=>{
            dispatch(getAllProducts(res.data))
        })
    },[dispatch])



    return(
        <div>
            <h1>All Products</h1>
        </div>
    )
}

export {AllProducts}