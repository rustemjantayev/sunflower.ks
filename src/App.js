import React, { useState, useEffect} from 'react';
import './App.css';
import {Layout} from 'antd';
import Footer from './components/Footer';
import Header from './components/Header';
import Content from './components/Content';
import AppContext from './components/AppContext';
import {Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';
import jwt_decode from 'jwt-decode';
import {getToken, setToken} from './thirdpaprty/token';


const App = () => {
  const [user, setUser] = useState('');
  const [jwt, setJWT] = useState(false);
  const [route, setRoute] = useState('/');
  const [jwtDecoded, setJWTDecoded] = useState('');
  const store = {
    user: [user, setUser],
    jwt: [jwt, setJWT],
    route: [route, setRoute],
    isValidToken: [isValidToken]
  }

  useEffect(()=>{ // Did mount
    isValidToken();
  },[]);

  function isValidToken(){
    //TODO check for undefined !!!!!!!!!!!!!!!
    if(getToken()){ // if token is empty
      try{ // decode if exist
        const user = jwt_decode(getToken());
        setUser(user)
        return user;
      }catch(err){ // invalid token
        console.log(err.message);
        return false
      }
    }else { // token is empty 
      console.log('no token :(');
      return false;
    }
  }

  return ( 
      <AppContext.Provider value={store}>
      {JSON.stringify(user)}
        <Router>
          <Layout>
            <Header/>
            <Content/>
            <Footer/>
          </Layout>
        </Router>
      </AppContext.Provider>
  );
}
 
export default App;