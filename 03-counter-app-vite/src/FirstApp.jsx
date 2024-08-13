import { Link } from "react-router-dom"
import { useState } from "react"

export const FirstApp = () => {

  const [nombre, setNombre] = useState('')
  const [apellido, setApellido] = useState('')
  const [email, setEmail] = useState('')
  const [contraseña, setContraseña] = useState('')


  const handleSubmit = (e) => {
      e.preventDefault()
      const data = {
         nombre: nombre,
        apellido: apellido,
        email: email,
        contraseña: contraseña

      }
    try {
       console.log(data)

    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div>
    <div className="text-center  bg-gradient-to-r from-purple-500 via-pink-500 to-red-500   mb-6 flex">
    <h1 className='m-auto'>Registrar Usuario</h1>
    <h2 className=''>Usuario</h2>
    </div>
    <div id="Formulario" className=' m-auto flex bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 w-96'>
      <form onSubmit={handleSubmit} className='flex flex-col  p-4 m-auto text-black'>
        <label className="ml-5 mb-2 text-black font-bold" >Nombre</label>
        <input type='text' id='nombre' name='nombre' value={nombre} onChange={(e) => setNombre(e.target.value)} className='px-2 py-1 rounded-md ml-5  ' placeholder='Nombre' ></input>
        <label className="ml-5 mb-2 mt-4   text-black font-bold" >Apellido</label>
        <input type='text' id='apellido' name='apellido'value={apellido} onChange={(e) => setApellido(e.target.value)} className='px-2 py-1 rounded-md ml-5 ' placeholder='Apellido' ></input>
        <label className="ml-5 mb-2 mt-4  text-black font-bold" >Email</label>
        <input type='email' id='email' name='email ' value={email} onChange={(e) => setEmail(e.target.value)} className='ml-5 px-2 py-1 rounded-md' placeholder='Email' ></input>
        <label className="ml-5 mb-2 mt-4   text-black font-bold px-2 py-1 rounded-md" >Contraseña</label>
        <input type='password' id='contraseña' name='contraseña'value={contraseña} onChange={(e) => setContraseña(e.target.value)} className='ml-5 px-2 py-1 rounded-md ' placeholder='Password' ></input>
        <button className="mt-4 w-36 m-auto bg-white  font-bold rounded-md" type="submit">Confirmar</button>
      
        </form>
    </div>
    <br/>
    <div>
        <p className='text-center '>¿Tenes cuenta? <button className='hover:bg-purple-600 rounded-md'> <Link to='/'>Iniciar Sesion</Link></button></p>
    </div>
    
   
</div>
  )
}
