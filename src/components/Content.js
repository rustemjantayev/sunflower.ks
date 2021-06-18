import React from 'react';
import {Layout} from 'antd';
//import AppContext from './AppContext';
import {Switch, Route, BrowserRouter as Router, Redirect} from 'react-router-dom';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SignInPage from './SignInPage';
import UserInfoPage from './UserInfoPage';
import UserSetingsPage from './UserSetingsPage';
import NotFound from './NotFound';

const {Content: LayoutContent} = Layout;

const Content = () => {
    //const context = useContext(AppContext); // state 
    return ( 
        <LayoutContent>
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