import { useState,useEffect } from "react"
import initializeFirebase from "../Pages/Login/Firebase/firebase.init";
import { getAuth, createUserWithEmailAndPassword ,signOut ,onAuthStateChanged,signInWithEmailAndPassword  } from "firebase/auth";


initializeFirebase();

const useFirebase=()=>{
    const [user,setUser] = useState({});
    const [isLoading,setIsLoading] = useState(true); 

    const auth = getAuth();


    const registerUser = (email,password,history)=>{
        setIsLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // const newUser = {email,displayName: name} ;
            // setUser(newUser);
            history.replace('/');
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
          })
          .finally(()=>setIsLoading(false));
    }

    const loginUser = (email,password ) => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
        
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            })
            .finally(()=>setIsLoading(false));
    }

    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) { 
             setUser(user)
            } else {
             setUser({})
            }
            setIsLoading(false);
          });
    },[])

    const logOut =()=>{
        setIsLoading(true);
        signOut(auth).then(() => {
            // Sign-out successful.
          }).catch((error) => {
            // An error happened.
          })
          .finally(()=>setIsLoading(false));
    }



    return {
        isLoading,
        user,
        registerUser,
        logOut,
        loginUser
    }
}

export default  useFirebase ;