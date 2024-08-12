import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
        <div className='text-center  bg-gradient-to-r from-purple-500 via-pink-500 to-red-500   mb-16 flex justify-items-start '>
        <h1 className='text-center m-auto'>Iniciar Sesion</h1>
        <h2 className=''>Usuario</h2>
        </div>
        <div id="Formulario" className='w-6/12 m-auto flex bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 w-96 mt-28'>
          <form className='flex flex-col  p-4 m-auto text-black'>
            <label className="ml-5 mb-2 mt-4  text-black font-bold" >Email</label>
            <input type='email' id='email' name='email ' className='ml-5 px-2 py-1 rounded-md' placeholder='Email' required></input>
            <label className="ml-5 mb-2 mt-4   text-black font-bold px-2 py-1 " >Contraseña</label>
            <input type='password' id='contraseña' name='contraseña' className='ml-5 px-2 py-1 rounded-md ' placeholder='Password' required></input>
            <button className="mt-4 w-36 m-auto bg-white  font-bold rounded-md" type="submit">Confirmar</button>
          
          </form>
        </div>
        <br/>
        <div>
            <p className='text-center '>¿Tenes cuenta? <button className='hover:bg-purple-600 rounded-md'> <Link to='/FirstApp'>Registrarse</Link></button></p>
        </div>
        <div>
            <p className='text-center '> <button className='hover:bg-purple-600 rounded-md'> <Link to='/HelloWorldApp'>Principal</Link></button></p>
        </div>
        <div className="stats shadow">
 
</div>
    </div>
    
  )
}

export default Home