import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase/firebase";

export const registerUser =(email,password) => {
    
    return createUserWithEmailAndPassword(auth,email,password);

};

export const loginUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logoutUser = () => {
  return signOut(auth);
};


