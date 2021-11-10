import React, { useEffect, useState } from 'react';
import Services from './Services/Services';

const ProductService = () => {
    const [product,setProduct]=useState([])

    useEffect(()=>{
        fetch("/products.json")
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div class="row row-cols-1 row-cols-md-2 g-4 container-fluid">
            {
                product.map(serv=><Services 
                key={serv.key}
                serv={serv}
                ></Services>)
            }
        </div>
    );
};

export default ProductService;