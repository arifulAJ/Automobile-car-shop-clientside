import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";


const initializationFirebase=()=>{
    return initializeApp(firebaseConfig)
}
export default initializationFirebase;