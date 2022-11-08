import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from './Context/AuthProvider/AuthProvider';

const UserReviews = ({services}) => {
    let {user} = useContext(AuthContext)
    console.log(services);

    
    return (
        <div>
            
        </div>
    );
};

export default UserReviews;