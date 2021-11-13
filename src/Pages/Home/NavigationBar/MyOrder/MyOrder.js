import React, { useEffect, useState } from 'react';
import useAuth from '../../../../Context/useAuth';
import ChieldOrder from './ChieldOrder';

const MyOrder = () => {
    const {user}=useAuth()
    const [order,setOrder]=useState([])
    useEffect(()=>{
     const   url=`https://safe-tundra-73084.herokuapp.com/myOrder?email=${user.email}`

        fetch(url)
        .then(res=>res.json())
        .then(data=>setOrder(data))
    },[])
    return (
        <div>
            <h1 className="text-center py-5">My order   {order.length}</h1>
            
            <div className="row row-cols-1 row-cols-md-4 g-4">
           

          {
          order.map(main=><ChieldOrder order={order} setOrder={setOrder} main={main}></ChieldOrder>)
          
          }
</div>
        </div>
    );
};

export default MyOrder;