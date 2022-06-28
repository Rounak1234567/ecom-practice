import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux"
import { fetchProducts } from "../redux/actions/productAction";




const AllProducts=()=>{

    const products = useSelector((state)=>state.allProducts.products)
    console.log(products)

    const dispatch = useDispatch();

    useEffect(()=>{
        setTimeout(()=>{
            dispatch(fetchProducts())
        }, 2000)
        
    },[dispatch])



    return(
        <div>
            <h1>All Products</h1>
        </div>
    )
}

export {AllProducts}