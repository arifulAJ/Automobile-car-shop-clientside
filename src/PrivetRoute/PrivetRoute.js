import React from 'react';
import useAuth from '../Context/useAuth';
import { Route ,Redirect} from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';


const PrivetRoute = ({ children, ...rest }) => {
    const {user,isLoddingIn} = useAuth();
    console.log(user.email)
    if(isLoddingIn){return  <CircularProgress />}
    return (
        <Route
        {...rest}
        render={({ location }) =>
         user.email?(
            children
          ) : (
            <Redirect
              to={{
                pathname: "/resister",
                state: { from: location }
              }}
            />
          )
        }
      />
    );
};

export default PrivetRoute;