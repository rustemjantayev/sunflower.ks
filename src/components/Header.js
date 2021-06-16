import React, { useContext } from 'react';
import {Layout} from 'antd';
import AppContext from './AppContext';
//import AppContext from './AppContext';

const {Header:Layoutheader} = Layout;

const Header = () => {
    const context = useContext(AppContext);
    return ( 
        <Layoutheader>
            Header
        </Layoutheader>
     );
}
 
export default Header;