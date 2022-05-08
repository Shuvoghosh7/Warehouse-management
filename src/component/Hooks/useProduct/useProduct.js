import { useEffect, useState } from "react"

const useProduct =(productId)=>{
    const[product,setProduct]=useState([])
    useEffect(()=>{
        const url=`https://mysterious-river-94324.herokuapp.com/product/${productId}`
        fetch(url)
        fetch(url)
        .then(res =>res.json())
        .then(data =>setProduct(data))
    },[productId])
    return [product,setProduct]

}
export default useProduct;