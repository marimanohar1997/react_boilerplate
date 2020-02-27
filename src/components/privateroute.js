import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const Privateroute = ({ component: Component, auth, ...rest }) => {
  console.log(auth)
  return (
    <Route {...rest}render={props =>
        localStorage.getItem('token')? (<Component {...props} />) : 
        (<Redirect to={{ pathname: '/', state: { from: props.location } }}/>)
      }
    />
  );
};



export default Privateroute;