import React, { Component, useContext, useEffect} from 'react';
import AppContext from './AppContext';
import { useHistory } from "react-router";

const NotFound = () => {
    const {
        ['user']:[user, setUser],
      } = useContext(AppContext); // state 

    return ( 
        <>
            404 - U R GORGEOUS ..
        </>
     );
}
 
export default NotFound;