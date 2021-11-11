import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Context/useAuth';
import ChieldOrder from './ChieldOrder';

const MyOrder = () => {
    const {user}=useAuth()
    const [order,setOrder]=useState([])
    useEffect(()=>{
     const   url=`http://localhost:5000/myOrder?email=${user.email}`

        fetch(url)
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[])
    return (
        <div>
            <h1>my order is  {order.length}</h1>
            
            <div className="row row-cols-1 row-cols-md-4 g-4">
           

          {
          order.map(main=><ChieldOrder main={main}></ChieldOrder>)
          
          }
</div>
        </div>
    );
};

export default MyOrder;