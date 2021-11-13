import React from 'react';
import Rating from 'react-rating';

const FieldChield = (props) => {
    const {email,number,description,name}=props.field
    return (
        <div >
            <div className="col ">
          <div className="card">
           
            <div className="card-body">
              <h5 className="card-title">Name: {name}</h5>
              <h5 className="card-title">Email: {email}</h5>
              <p className="card-text">{description}</p>
              <Rating
              initialRating={number}
               emptySymbol="far fa-star"
               fullSymbol="fas fa-star "
              readonly
              >

              </Rating>
              <br />
              <small className="card-text">Thank you for making us great</small>
            </div>
          </div>
        </div>
        </div>
    );
};

export default FieldChield;