import React, { useState} from 'react';
import './App.css';
import {Layout} from 'antd';
import Footer from './components/Footer';
import Header from './components/Header';
import Content from './components/Content';
import AppContext from './components/AppContext';

const App = () => {
  const [appState, setAppState]= useState({
    user:{
      name:'Rustem'
    },
    location:{}
  });

  function changeData(){
    setAppState({...appState,age:14});
  }

  return ( 
      <AppContext.Provider value={appState}>
        <Layout>
          <Header/>
            <Content changeHandler={changeData}/>
          <Footer/>
        </Layout>
      </AppContext.Provider>
  );
}
 
export default App;