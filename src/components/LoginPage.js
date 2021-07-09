import React, { useEffect, useState, useContext } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import AppContext from './AppContext';
import {login} from  '../services/authorization';
import {openNotificationWarning} from '../thirdpaprty/notification';
import { useHistory } from "react-router";

const LoginPage = () => {
    const {
      ['user']:[user, setUser],
      ['jwt']:[jwt, setJWT],
      ['isValidToken']:[isValidToken]
    } = useContext(AppContext); // state 
    const history = useHistory();
    const [callApi, setCallApi] = useState(false);
    
    const onFinish = async (values) => {
      try{
        const {username, password} = values;
        const result = await login(username, password);
        if(result.status===200){
          const {status:loginStatus,data:loginData,message:loginMessage} = result.data;
          if(loginStatus === "success"){
            localStorage.setItem('token', loginData.token);
            isValidToken();
            //redirect to main
            history.push({
              pathname:  "/me",
            })
          }else{
            openNotificationWarning('test','User or massword is wrong...');
          }
        }else{
          openNotificationWarning('test','User or massword is wrong...');
        }
      } catch(ex) {
        openNotificationWarning('test',ex.message);
      }


    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    useEffect( ()=>{
      if(callApi){
        fetch();    
        setCallApi(false);
      }
    },[callApi]);

    return ( 
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Username"
          name="username"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
         
        >
          <Input />
        </Form.Item>
  
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: 'Please input your password!',
            },
          ]}
        >
          <Input.Password />
        </Form.Item>
  
        <Form.Item  name="remember" valuePropName="checked">
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
  
        <Form.Item >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>

    );
}
 
export default LoginPage;