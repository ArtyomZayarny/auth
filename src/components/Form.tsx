import { useState } from 'react'
export default function Form() {

  const [form, setFrom] = useState({
    email: '',
    password: ''
  })


  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    console.log('ts')
    setFrom({ ...form, [e.currentTarget.name]: e.currentTarget.value })
  }

  const btnName = 'SignIn'
  return (
    <form>
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
      <input
        type="submit"
        value={btnName}
        disabled={false}
      />
    </form>
  )
}