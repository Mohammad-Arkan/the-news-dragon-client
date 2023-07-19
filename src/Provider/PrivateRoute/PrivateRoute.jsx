import React from 'react';
import { AuthContex } from '../AuthProvider';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user} = useContext(AuthContex)
    const location = useLocation();
    console.log(location)
    if(user){
        return children
    }
    return <Navigate  state={{ from: location }} to='/login'  replace ></Navigate>
};

export default PrivateRoute;