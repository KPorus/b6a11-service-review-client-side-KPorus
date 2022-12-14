import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../component/Context/AuthProvider/AuthProvider';


/* 
1. only allow authenticated user to visit the route
2. 
3. Redirect user to the route they wanted to go before login
*/

const PrivateRoute = ({children}) => {
    const {user, loading, setLoading} = useContext(AuthContext);
    const location = useLocation();

    if(loading){
        return setLoading(false)
    }
    
    if(user && user.uid){
       
        return children;
    }
    return <Navigate to="/login" state={{from: location}} replace></Navigate>
    
};

export default PrivateRoute;