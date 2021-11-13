
import React, { useEffect, useState } from 'react';
import FieldChield from './FieldChield';
const ReviewsField = () => {
  const [refField,setRefField]=useState([])
  useEffect(()=>{
    fetch('https://safe-tundra-73084.herokuapp.com/review')
    .then(res=>res.json())
    .then(data=>setRefField(data))
  },[])
  return (
    <div >
   <div className="row row-cols-1 row-cols-md-4 container-fluid g-4 backgroundType">
        
        {
      
           refField.map(field=><FieldChield field={field}></FieldChield>)
        }
        
      </div>
   

    </div>
  );
};

export default ReviewsField;