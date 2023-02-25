import axios from 'axios'
import { AUTH_SIGN_IN_ERROR, AUTH_SIGN_IN_LOADING, AUTH_SIGN_IN_SUCCESS, AUTH_SIGN_OUT,AUTH_SIGN_IN_CONFIRMATION } from './auth.actionTypes';
import { RecaptchaVerifier, signInWithPhoneNumber} from "firebase/auth"

import {auth } from '../firebase'

  export const signIn = () => async (dispatch) => {

      dispatch({ type: AUTH_SIGN_IN_SUCCESS });
   
   
  };

  // Phone Number Signup
 const SignRecaptcha = (number)=>{
  const recaptchVerifier = new RecaptchaVerifier('recaptcha-container', {}, auth);

  recaptchVerifier.render();
  return signInWithPhoneNumber(auth,number,recaptchVerifier)
  }

  export const sign_in_with_Phone = (user) => async (dispatch)=>{
    dispatch({type:AUTH_SIGN_IN_LOADING});
    try {
      let res = await SignRecaptcha(user.number);
      let payloadObj = {"name":user.name,"confirmObj":res}
      dispatch({ type: AUTH_SIGN_IN_CONFIRMATION, payload:payloadObj });
      console.log("res====",res);
    } catch (error) {
      console.log(error)
      dispatch({type:AUTH_SIGN_IN_ERROR})
    }
  }


  
  export const signout = () =>  (dispatch) => {
    dispatch({ type: AUTH_SIGN_OUT });
  };