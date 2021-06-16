import React from 'react';
import {Layout} from 'antd';
//import AppContext from './AppContext';

const {Content: LayoutContent} = Layout;

const Content = ({
    changeHandler
}) => {
    //const context = useContext(AppContext); // state 
    return ( 
        <LayoutContent>
            Content...
            <button onClick={changeHandler}>Click</button>
        </LayoutContent>
     );
}
 
export default Content;