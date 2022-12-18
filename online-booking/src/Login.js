import React, { Component, useState } from 'react';
import LoginContainer from './LoginContainer';
import { Button, Checkbox, Form, Input } from 'antd';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  
    const onFinish = (values) => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = (errorInfo) => {
      console.log('Failed:', errorInfo);
    };

    let handleSubmit = async (e) => {
      e.preventDefault();
      try {
        setEmail(email);
        setPassword(password);

        // let res = await fetch("/booking/login", {
        //   method: "POST",
        //   body: JSON.stringify({
        //     email: email,
        //     passwrod: password
        //   }),
        // });

        // let resJson = await res.json();

        // if (res.status === 200) {
        
        if (true) {
          window.location.href = "/customer";
          console.log(email)
        } else {
          //
        }
      } catch (err) {
        console.log(err);
      }
    };
  
    return (
      <LoginContainer>
        <h1>Online Booking System</h1>
      <Form
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: true,
              message: 'Please input your email!',
            },
          ]}
        >
          <Input
            value={email}
            onChange={e => setEmail(e.target.value)}
            />
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
          <Input.Password 
            value={password}
            onChange = {e => setPassword(e.target.value)}
            />
        </Form.Item>
  
        <Form.Item
          name="remember"
          valuePropName="checked"
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
  
        <Form.Item
          wrapperCol={{
            offset: 8,
            span: 16,
          }}
        >
          <Button type="primary"
            htmlType="submit"
            onClick = { handleSubmit }>
            Submit
          </Button>
          <Button type="link" htmlType="submit">
            Register
          </Button>
        </Form.Item>
      </Form>
      </LoginContainer>
      
    );
    
  };
  
  export default Login;
  