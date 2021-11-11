import React from 'react';

const Footer = () => {
    return (
        <div style={{backgroundColor:"#007ACC",color:"white"}} className="footer">
            <div className="container">
  <div className="row row-cols-lg-3 row-cols-md-2 row-cols-1 py-5">
    <div className="col">
      <img style={{width:'60px'}} src="https://1000logos.net/wp-content/uploads/2020/03/Rolls-Royce-Logo-1973.png" alt="" />
      <span style={{fontWeight:'bolder',fontSize:'20px'}}>Branding car</span>
    </div>
    <div className="col">
    
    </div>
    <div className="col">
    <div>
        <h1>Connect with us</h1>
        <i className="fab fa-facebook-square"></i>
        <i className="fab fa-twitter p-2"></i>
        <i className="fab fa-instagram-square "></i>
        <i className="fab fa-skype p-2 "></i>
    </div>
    </div>
  </div>
  <h6 className="text-center"> Don't copy <i className="fas fa-copyright"></i> our products you will be caught</h6>
</div>
        </div>
    );
};

export default Footer;