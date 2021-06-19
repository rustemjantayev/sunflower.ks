import React, { useState} from 'react';
import './App.css';
import {Layout} from 'antd';
import Footer from './components/Footer';
import Header from './components/Header';
import Content from './components/Content';
import AppContext from './components/AppContext';
import {Switch, Route, Link, BrowserRouter as Router} from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';

const App = () => {
  const [appState, setAppState]= useState({
    user:{
      name:'Rustem'
    }
  });

  return ( 
      <AppContext.Provider value={appState}>
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