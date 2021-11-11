import React, { useEffect, useState } from 'react';
import Services from './Services/Services';

const ProductService = () => {
    const [product,setProduct]=useState([])

    useEffect(()=>{
        fetch("http://localhost:5000/cars")
        .then(res=>res.json())
        .then(data=>setProduct(data))
    },[])
    return (
        <div className="row row-cols-1 row-cols-md-2 g-4 container-fluid">
            {
                product.map(serv=><Services 
                key={serv._id}
                serv={serv}
                ></Services>)
            }
        </div>
    );
};

export default ProductService;