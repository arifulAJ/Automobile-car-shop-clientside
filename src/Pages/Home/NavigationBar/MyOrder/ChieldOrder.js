import React from 'react';

const ChieldOrder = (props) => {
    const{name,carImg,address,phone,carName}=props.main
    console.log(props.main)
    return (
        <div>
            <div class="col">
    <div class="card h-100">
      <img src={carImg}class="card-img-top" alt="..."/>
      <div class="card-body">
        <h5 class="card-title">Name : {name}</h5>
        <h6 class="card-title">Car name : {carName}</h6>
        <h6 class="card-title">Address : {address}</h6>
        <h6 class="card-title"> Mobile : {phone}</h6>
        <button type="button" class="btn btn-danger ">Delete</button>
        <button type="button" class="btn btn-danger mx-5">Pending</button>
        
      </div>
    </div>
  </div>
        </div>
    );
};

export default ChieldOrder;