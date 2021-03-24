import { useState } from 'react'
import { Form, Input, Button, Checkbox } from 'antd';
import { useHttp } from '../hooks/useHttp'


type Credentials = {
  username: string,
  password: string
}
type FormProps = {
  name: string,
}

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};

const tailLayout = {
  wrapperCol: { offset: 8, span: 16 },
};

const AuthForm: React.FC<FormProps> = ({ name }) => {

  const { request } = useHttp()
  const sigUpRequest = async (data: Credentials): Promise<void> => {
    const url = '/auth/signup'

    try {
      const response = await request(url, { ...data })
      console.log(response)
    } catch (e) {
      console.warn(e)
    }
  }
  const signInRequest = async (data: Credentials) => {
    const url = '/auth/signin'
    try {
      const response = await request(url, { ...data })
      console.log(response)
    } catch (e) {
      console.warn(e)
    }
  }

  const onSubmit = (data: any) => name === 'signup' ? sigUpRequest(data) : signInRequest(data);

  const onFinish = (values: any) => {
    onSubmit(values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (

    <Form
      {...layout}
      name="basic"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item {...tailLayout}>
        <Button type="primary" htmlType="submit">
          Submit
      </Button>
      </Form.Item>
    </Form>
  )
}
export default AuthForm