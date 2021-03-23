import { useState } from 'react'
import { Button } from 'antd'
import { useHttp } from '../hooks/useHttp'
import { useForm } from "react-hook-form";


type Inputs = {
  example: string,
  exampleRequired: string,
};

type Credentials = {
  username: string,
  password: string
}
type FormProps = {
  name: string,
}

const Form: React.FC<FormProps> = ({ name }) => {

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
    const url = '/auth/sigin'
    try {
      const response = await request(url, { ...data })
      console.log(response)
    } catch (e) {
      console.warn(e)
    }
  }

  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const onSubmit = (data: any) => name === 'signup' ? sigUpRequest(data) : signInRequest(data);


  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="Email"> Email
        <input id="email" name="username" ref={register} autoComplete="off" />
      </label>
      <label htmlFor="password">Password
        <input id="password" name="password" type="password" ref={register({ required: true })} />
      </label>
      {errors.exampleRequired && <span>This field is required</span>}
      <Button type="primary" htmlType="submit">name</Button>
    </form >
  )
}
export default Form