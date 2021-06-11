import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import {Layout} from 'antd';
const {Header, Content, Footer} = Layout;

function App() {
  return (
      <>
        <Layout>
          <Header>Header</Header>
          <Content>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
      </>
  );
}

export default App;
