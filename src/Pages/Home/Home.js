import React from 'react';
import Banner from './Banner/Banner';
import Groth from './Gorth/Groth';
import ProductService from './ProductService/ProductService';
import Reviews from './ReviewsField/ReviewsField';


const Home = () => {
    return (
        <div>
        
         <Banner></Banner>
         <div>
             <h1 className="text-center py-5">Products of Our Company </h1>
             <ProductService></ProductService>
         </div>
         <div>
             <h1 className="text-center py-5">Our Company and it is grow up  </h1>
             <Groth></Groth>
         </div>
         <div>
             <h1 className="text-center py-5">Reviews section of  Our Company </h1>
             <Reviews></Reviews>
         </div>
       
        </div>
    );
};

export default Home;