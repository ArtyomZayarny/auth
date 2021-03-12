import { useState } from 'react'
import { useHttp } from '../hooks/useHttp'

export default function Form() {

  const [form, setFrom] = useState({
    email: '',
    password: ''
  })
  const { request } = useHttp()


  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setFrom({ ...form, [e.currentTarget.name]: e.currentTarget.value })
  }

  const handleSubmit = () => {
    const url = '/auth/signin/'

    try {
      const data = request(url, "POST", { ...form })
    } catch (e) {
      console.warn(e)
    }
  }

  const btnName = 'SignIn'
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          autoComplete="off"
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
      </label>
      <label>
        Password:
        <input
          autoComplete="off"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
      </label>
      <input type="submit" value={btnName} />
    </form>
  )
}