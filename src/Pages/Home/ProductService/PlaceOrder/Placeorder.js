
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../../../../Context/useAuth';

const Placeorder = () => {
  const {user}=useAuth()
  const [brand,setBrand]=useState([])
 
  const { register, handleSubmit } = useForm();
   
    const {idmon}=useParams()
   
   
    const onSubmit = data =>{ 
    
      alert('submitting')
      //send server data
      fetch('http://localhost:5000/shiping',{
        method:'POST',
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(result=>{
        console.log(result)
      })
      
      
      console.log(data)};






    useEffect(()=>{
        const url=`http://localhost:5000/cars/${idmon}`
        
        fetch(url)
        .then(res=>res.json())
        .then(data=>setBrand(data))
    },[])
    return (
      <div> <h1 className="text-center py-5"> Thanks for purchasing our products</h1>
     <div className="row row-cols-lg-2 row-cols-1 container-fluid">
       
       <div className="card mb-3">
  <img src={brand.img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{brand.name}</h5>
    <p className="card-text">{brand.description}</p>
    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
  </div></div>
        <div className="text-center py-5">
          <h5 className="pb-3">For the shipping give a valid location </h5>
         
          <form onSubmit={handleSubmit(onSubmit)}>
      <input required   {...register("email")}  defaultValue={user.email}  className="w-50 " /> <br/>
      <input required   {...register("carImg")}  defaultValue={brand.img}  className="w-50 " /> <br/>
      <input {...register("name")}  defaultValue={user.displayName} className="w-50 my-2" /> <br/>
      <input   {...register("carName")}   defaultValue={brand.name} className="w-50 " /> <br/>
      <input {...register('address')}  placeholder="type your address" className="w-50 my-2 "/> <br/>
      <input {...register("phone")}  placeholder="phone number" className="w-50 " /> <br/>
     
      <input type="submit" className="w-50 mt-1 "  />
    </form>  
        </div>
     </div></div>
    );



   
};

export default Placeorder;

    