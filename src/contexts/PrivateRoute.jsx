import React, { use } from 'react';
import { AuthContext } from './AuthCOntext';
import { Navigate } from 'react-router';
import Loader from '../shared/Loader';

const PrivateRoute = ({children}) => {
   const {user,loading} = use(AuthContext)
   if(loading) return <Loader/>
   if(user){
    return children
   }else{
    return <Navigate to={`/`}></Navigate>
   } 
};

export default PrivateRoute;