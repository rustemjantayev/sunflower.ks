import React, { useContext, useEffect } from 'react';
import {Layout} from 'antd';
import AppContext from './AppContext';

const {Header:Layoutheader} = Layout;

const Header = () => {
    const context = useContext(AppContext);

    useEffect(()=>{
        if(context.age){
            console.log('Context changed: age - ', context.age);
        }

    },[context.age]);

    return ( 
        <Layoutheader>
            Header
        </Layoutheader>
     );
}
 
export default Header;