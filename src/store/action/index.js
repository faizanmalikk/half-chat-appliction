import firebase from "../../config/firebase"
import { getAuth, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { getDatabase,push, set, child,get, remove, update,onChildAdded, ref} from "firebase/database"
import { useHistory } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";

const set_data = (data)=>{
  
return (dispatch)=>{
   
    dispatch({
        type : "Setdata",
        // users : {
        //     name: "ali",
        //     email: "gjl@gmail.com"
        // }
        users : data
    })
}
}
const facebook_login = ()=>{
   
    return(dispatch)=>{
        const provider = new FacebookAuthProvider();
        const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // The signed-in user info.
    const user = result.user;

    // This gives you a Facebook Access Token. You can use it to access the Facebook API.
    const credential = FacebookAuthProvider.credentialFromResult(result);
    const accessToken = credential.accessToken;
    let create_user = {
      name : user.displayName,
      email: user.email,
      photo : user.photoURL,
      uid : user.uid
    }
    dispatch({type:"Userdata", payload: create_user})
   
    const db = getDatabase()
    set(ref(db, "users/" + user.uid),{
      name : user.displayName,
      email: user.email,
      photo : user.photoURL,
      uid : user.uid
    })
      .then(() => {
        alert("data stored successfully")
     
     })
   
      .catch((error) => {
        alert("unsuccessfully error" + error)
      })
    // ...
  })
  .catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The AuthCredential type that was used.
    const credential = FacebookAuthProvider.credentialFromError(error);
     console.log("error==>",errorMessage)
    // ...
  });
 
    } 
    
  }
    function get_data(){
   return (dispatch)=>{
    const db = getDatabase()
    const commentsRef = ref(db, 'users/');
    let firebaseusers = []
    onChildAdded(commentsRef, (snapshot) => {
      console.log(snapshot.val())
        firebaseusers.push(snapshot.val())
      
    });

    dispatch({type:"firebaseusers",payload: firebaseusers})













}
          }
          function chnglocation(){
           return(dispatch)=>{
             
             let  x = [] 
               window.location.pathname = x
               x.push("/about")
           }}

export {
    set_data,
    facebook_login,
    get_data,
    chnglocation
}