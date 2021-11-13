import React, { useEffect,useState } from 'react';
import Iteams from './Iteams';


const ExploreItems = () => {
    const [car,setCar]=useState([])
    useEffect(()=>{
        fetch('http://localhost:5000/cars')
        .then(res=>res.json())
        .then(data=>setCar(data.slice(6)))
    },[])
    return (
        <div className="row row-cols-1 row-cols-md-2  g-4 container-fluid">
           {
               car.map(isCar=><Iteams 
               isCar={isCar}
               key={isCar._id}
               ></Iteams>)
           }
        </div>
    );
};

export default ExploreItems;