import {configureStore} from "@reduxjs/toolkit";
import userReducer from "../feature/UseSlice";
 export default configureStore({
     reducer:{
         user:userReducer,
     }
 })