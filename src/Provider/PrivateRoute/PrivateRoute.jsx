import React from 'react';
import { AuthContex } from '../AuthProvider';
import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Spinner } from 'react-bootstrap';

const PrivateRoute = ({children}) => {
    const {user, loading} = useContext(AuthContex)
    const location = useLocation();
    console.log('User in private route', user)

    if(loading){
        return <Spinner animation="border" variant="primary" />
    }

    if(user){
        return children
    }
    return <Navigate  state={{ from: location }} to='/login'  replace ></Navigate>
};

export default PrivateRoute;