import { useState } from 'react'
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

export default function Form() {

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

  const btnName = 'SignIn'

  const { register, handleSubmit, watch, errors } = useForm<Inputs>();
  const onSubmit = (data: any) => sigUpRequest(data);


  return (

    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="username" ref={register} autoComplete="off" />
      <input name="password" type="password" ref={register({ required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <input type="submit" value={btnName} />
    </form >
  )
}