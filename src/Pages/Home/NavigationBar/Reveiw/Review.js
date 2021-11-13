
import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../../../Context/useAuth';

import './Review.css'


const Review = () => {
    const {user}=useAuth()
 
    const { register, handleSubmit } = useForm();
   
    const onSubmit = data =>{
      alert("your review is success")
        
        fetch('http://localhost:5000/review',{
            method:'POST',
            headers:{
                'content-type':'application/json'
            },
            body:JSON.stringify(data)
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
        })


        
    }
 
    return (
        <div  className="text-center backgroundType pb-5 ">
            <h1 className="text-center my-5">Review section</h1>
            <h6 className="text-center my-5">Pleace give us your valuable rating</h6>
            <form onSubmit={handleSubmit(onSubmit)}>
      <input required   {...register("email")}  defaultValue={user.email}  className="w-50 " /> <br/>
     
      <input {...register("name")}  defaultValue={user.displayName} className="w-50 my-2" /> <br/>
      <textarea {...register("description")}  placeholder="write something that you fell by exploring our company" className="w-50 my-2" /> <br/>
      <input type="number" {...register("number", { min: 1, max: 5 })}  placeholder="type rating number" className="w-50 my-2"  /> <br />
     
     
    
      <input type="submit" className="w-50 mt-1 "  />
    </form> 
    
        </div>
    );
};

export default Review;