import React from 'react';

const Services = (props) => {
    const {img}=props.serv
    return (
        
        <div class="col">
          <div class="card">
            <img  src={img} class="card-img-top" alt="..."/>
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              <button type="button" class="btn btn-danger">Purchase </button>
            </div>
          </div>
        </div>
       
    
     
    );
};

export default Services;