import { updateProfile } from '@firebase/auth';
import { Link } from '@material-ui/core';
import React, { useState } from 'react';
import { NavLink,useHistory,useLocation } from 'react-router-dom';
import useAuth from '../../../Context/useAuth';


const Resister = () => {
    const {user,resisterHandel,setIsLoddingin,auth}=useAuth()
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const history=useHistory()
    const location=useLocation()
  const url=location.state?.from|| '/home'
  const handelName=e=>{
      setName(e.target.value)

  }
  const handelEmail=e=>{
      setEmail(e.target.value)

  }
  const handelPassword=e=>{
      setPassword(e.target.value)

  }
  const handelResisterSubmit=e=>{
    e.preventDefault()
    resisterHandel(email,password,name)
    .then((userCredential) => {
        // Signed in 
        setIsLoddingin(true)
        const user = userCredential.user;
        // ...
        return updateProfile(auth.currentUser, {
          displayName: name, 
        }).then(() => {
          // Profile updated!
          // ...
        }).catch((error) => {
          // An error occurred
          // ...
        });
        history.replace(url)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      })
      .finally(()=>setIsLoddingin(false));
}



    return (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-2">
        <div className="text-center my-3">
        <h1>Resister</h1>
            <form onSubmit={handelResisterSubmit}>
                <input className="my-3" type="text" placeholder="name" onBlur={handelName} /> <br/>
                <input type="email" placeholder="email" onBlur={handelEmail}/><br/>
                <input className="my-3" type="password" placeholder="password" onBlur={handelPassword} /><br/>
                <button type="submit" class="btn btn-danger">Resister</button>
            </form>
          Already have an account  <NavLink style={{textDecoration:"none"}} to='/login'> Login</NavLink>
            
        </div>
        <div>
        <div>
        <img style={{width:"100%"}} src="https://c4.wallpaperflare.com/wallpaper/598/850/403/rolls-royce-phantom-4k-8k-hd-wallpaper-preview.jpg"></img>
      </div>
        </div>
        </div>
    );
};

export default Resister;





















































// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';


// import Grid from '@mui/material/Grid';
// import { Button,  Typography } from '@mui/material';
// import { NavLink } from 'react-router-dom';
// import useFireBase from '../UseFirebase/UseFireBase';
// const Resister = () => {
//     const {user,resisterHandel}=useFireBase()
//   const [resisters,setResisters]=useState({})

//   const handelOnblur=e=>{
//       const field=e.target.name;
//       const value=e.target.value;
//       const newResister=resisters;
//       console.log(newResister);
//       newResister[field]=value;
//       setResisters(newResister)



//   }

//     const handelResister=e=>{
//         e.preventDefault()
//         alert('submit your data');
//         console.log('object')
//         resisterHandel(resisters.email,resisters.password)
//     }
//     return (
//         <Box sx={{ flexGrow: 1 }}>
//             <Typography sx={{fontSize:'34px',textAlign:'center',fontWeight:'bolder',padding:' 50px'}}>Login</Typography>
//       <Grid container spacing={2}>
//         <Grid item xs={12} md={6}>
//         <img className="w-100" src="https://www.teahub.io/photos/full/241-2419661_rolls-royce-logo-hd.jpg" alt="" />
//         </Grid>
//         <Grid item xs={12} md={6} className="text-center">
//         <form onSubmit={handelResister}>
       
//         <TextField
//           sx={{width:'50%',m:1}}
//          id="standard-basic"
//          label="name"
//          onBlur={handelOnblur}
//          type="name"
//         variant="standard" /> <br />
//         <TextField
//           sx={{width:'50%',m:1}}
//          id="standard-basic"
//          label="email"
//          onBlur={handelOnblur}
//          type="email"
//         variant="standard" /> <br />
//         <TextField
//           sx={{width:'50%',m:1}}
       
//          id="standard-basic"
//          label="Password"
//          onBlur={handelOnblur}
//          type="password"
//         variant="standard" /> <br />
//         <Button  type='submit' variant="contained">Resister</Button>

//         </form>
//         <Typography sx={{marginY:"30px"}}>
//            Already have an account? pleace <NavLink style={{textDecoration:'none'}} to='/login'>  Login</NavLink>
//         </Typography>
//         <Typography>
//           email:  {user?.email}
//         </Typography>
       
     
//         </Grid>
        
//       </Grid>
//     </Box>
//     );
// };

// export default Resister;