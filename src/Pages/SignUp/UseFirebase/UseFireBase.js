import { useEffect, useState } from "react"
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,GoogleAuthProvider ,signInWithPopup,onAuthStateChanged,signOut,updateProfile    } from "firebase/auth";
import initializationFirebase from "../../../Firebase/Firebase.inite";
initializationFirebase();
const GoogleProvider = new GoogleAuthProvider();
const useFireBase=()=>{

    const [user,setUser]=useState([]);
    const [isLoddingIn,setIsLoddingin]=useState(true)
    const auth = getAuth();
   
    const resisterHandel=(email,password,name)=>{console.log(email,password)
     
     return   createUserWithEmailAndPassword(auth, email, password,name)
      
    }
 const signInHandel=(email,password,name)=>{
  return  signInWithEmailAndPassword(auth, email, password);
 
    
 }
 const googleSignIn=()=>{
  return  signInWithPopup(auth, GoogleProvider)
   
 }
 useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
        if (user) {
          
          setUser(user)
          // ...
        } else {
          setUser({})
        }
        setIsLoddingin(false)
      });
 },[])
 const SignOutPlace=()=>{
    signOut(auth).then(() => {
        // Sign-out successful.
        setUser({})
      }).catch((error) => {
        // An error happened.
      });
 }

    return {
        user,
        auth,
        resisterHandel,
        signInHandel,
        googleSignIn,
        SignOutPlace,
        isLoddingIn,
        setIsLoddingin
    }
       
   
}
export default useFireBase;