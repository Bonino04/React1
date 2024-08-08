import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <h1 className=''>Hola Home</h1>
        <Link to='/firstApp'>Entrar a firsApp</Link>
        <Link to='/couterApp'>Entrar a firsApp</Link>
    </div>
  )
}

export default Home