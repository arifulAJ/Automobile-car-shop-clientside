import React from 'react';
import useAuth from '../../../../Context/useAuth';

const ChieldOrder = (props) => {
  const {user}=useAuth()
    const{name,carImg,address,phone,carName,_id,setOrder,order}=props.main;
    const handelDelete=id=>{
      const   url=`https://safe-tundra-73084.herokuapp.com/myOrder/${id}`
      fetch(url,{
        method:'DELETE'
      })
      .then(res=>res.json())
      .then(result=>{
        console.log(result)
        if(result.deletedCount>0){
          alert("deleted successfully");
          // const remainingUser=order.filter(ord=> ord._id!==id)
          // setOrder(remainingUser);
          console.log(id)
        }
      })
    }

    return (
        <div>
            <div className="col">
    <div className="card h-100">
      <img src={carImg}className="card-img-top" alt="..."/>
      <div className="card-body">
        <h5 className="card-title">Name : {name}</h5>
        <h6 className="card-title">Car name : {carName}</h6>
        <h6 className="card-title">Address : {address}</h6>
        <h6 className="card-title"> Mobile : {phone}</h6>
        <button type="button" onClick={()=>handelDelete(_id)} className="btn btn-danger ">Delete</button>
        <button type="button" className="btn btn-danger mx-5">Pending</button>
        
      </div>
    </div>
  </div>
        </div>
    );
};

export default ChieldOrder;