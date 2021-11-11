
import React, { useState } from 'react';
import { NavLink,useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../../Context/useAuth';

const Login = () => {
  const {user,setUser,signInHandel,SignOutPlace,googleSignIn,isLoddingIn,setIsLoddingin}=useAuth()
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
 const history=useHistory()
 const location=useLocation()

 const url=location.state?.from|| "/placeOrder/:id"
 const Guri=location.state?.from|| "home"

const handelEmail=e=>{
    setEmail(e.target.value)

}
const handelPassword=e=>{
    setPassword(e.target.value)

}
const handelSignInSubmit=e=>{
  e.preventDefault()
  signInHandel(email,password)
  .then((userCredential) => {
    setIsLoddingin(true)
    // Signed in 
    history.replace(url)
    const user = userCredential.user;
 
    setUser(user)
  
    

  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  })
  
  .finally(()=>setIsLoddingin(false));
}
const handelSignInWithGoogle=()=>{
  googleSignIn()
  .then((result) => {
     history.push(Guri)
    setUser(result.user);
 
   
  }).catch((error) => {
    
  })
  .finally(()=>setIsLoddingin(false));
}
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
      <div>
        <img style={{width:"100%"}} src="https://c4.wallpaperflare.com/wallpaper/598/850/403/rolls-royce-phantom-4k-8k-hd-wallpaper-preview.jpg" alt=""></img>
      </div>
      <div className="text-center py-3">
      <h1>login</h1>
            <form onSubmit={handelSignInSubmit}>
               
                <input className="my-3" type="email" placeholder="email" onBlur={handelEmail}/><br/>
                <input className="my-3" type="password" placeholder="password" onBlur={handelPassword} /><br/>
                <button className="my-3" type="submit" class="btn btn-danger">Login</button>
            </form>
          Already have an account  <NavLink style={{textDecoration:"none"}} to='/resister'> Resister</NavLink> <br/>
          <button onClick={SignOutPlace} type="button" class="btn btn-danger my-2">Log out</button> <br/>
          <button onClick={handelSignInWithGoogle} type="button" class="btn btn-danger my-2">Google sign in</button>
            <h6>email:{user.email}</h6>
      </div>
        </div>

  );
};

export default Login;