import React, { Component, useState} from 'react';
import './App.css';
import {Layout} from 'antd';
import Footer from './components/Footer';
import Header from './components/Header';
import Content from './components/Content';

class App extends Component {
  state = {  }
  render() { 
    return ( 
      <Layout>
        <Header/>
          <Content/>
        <Footer/>
      </Layout>

     );
  }
}
export default App;