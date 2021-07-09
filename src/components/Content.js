import React, {useContext} from 'react';
import {Layout} from 'antd';
//import AppContext from './AppContext';
import {Switch, Route, BrowserRouter as Router, Redirect} from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignInPage from './SignInPage';
import UserInfoPage from './UserInfoPage';
import UserSetingsPage from './UserSetingsPage';
import NotFound from './NotFound';
import AppContext from './AppContext';


const {Content: LayoutContent} = Layout;

const Content = () => {
    const {
        ['user']:[user, setUser]
      } = useContext(AppContext); // state 

    return ( 
        <LayoutContent  style={{ padding: '50px 50px' }}>
            <Switch>
                <Route exact path="/">
                    <HomePage/>
                </Route>
                <Route exact path="/login">
                    <LoginPage/>
                </Route>
                <Route exact path="/signin">
                    <SignInPage/>
                </Route>
                <Route exact path="/me">
                    <UserInfoPage/>
                </Route>
                <Route exact path="/settings">
                    <UserSetingsPage/>
                </Route>
                <Route path="/404">
                    <NotFound/>
                </Route>
                <Route>
                    <Redirect to="/404"/>
                </Route>
            </Switch>
        </LayoutContent>
     );
}

export default Content;