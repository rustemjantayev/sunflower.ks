import React,{useEffect, useContext} from 'react';
import AppContext from './AppContext';
//import AppContext from './AppContext';
import { useHistory } from "react-router";

const UserInfoPage = () => {
    const history = useHistory();
    const {['user']:[user, setUser]} = useContext(AppContext); // state 
    useEffect(()=>{ // Did mount
        if(!user){
            history.push({
                pathname:"/Login"
            });
        }
    },[]);
    //const context = useContext(AppContext); // state 
    
    return ( 
        <>
            UserInfoPage...
        </>
     );
}
 
export default UserInfoPage;