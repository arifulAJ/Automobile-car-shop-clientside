
import React from 'react';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../Context/useAuth';

const NavigationBar = () => {
  const {user,SignOutPlace}=useAuth()

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
        <img src="https://i.pinimg.com/originals/7f/e7/77/7fe777c0459107f4d07d9015f33f9ce7.jpg" alt="" width="30" height="24" className="d-inline-block align-text-top"/>
       <span style={{fontSize:'24px',fontWeight:"bolder"}} className="bolder "> Rolls Royce</span>
       
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
           
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
      <NavLink className="nav-link active" aria-current="page" to="/home">Home</NavLink>
          <NavLink className="nav-link active" aria-current="page" to="/explore">Explore</NavLink>
          </ul>
          </div>
         
          <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
         
         {
           user.email?
           <div>
            
             <NavLink to="/pay"><button type="button" className="btn ">pay</button></NavLink>
             <NavLink to="/myorder"><button type="button" className="btn  mx-1">My order</button></NavLink>
             <NavLink to="/review"><button type="button" className="btn mx-1">Review</button></NavLink>
             <button onClick={SignOutPlace} type="button" className="btn btn-danger ">log out</button>
           </div>
           :
           <NavLink to="/login"><button type="button" className="btn btn-danger">Login</button></NavLink>
           
         }
        
      
           
          </div>
        </div>
      </nav>
    );
};

export default NavigationBar;