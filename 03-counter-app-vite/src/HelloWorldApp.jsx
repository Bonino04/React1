import { Link } from "react-router-dom"


export const HelloWorldApp = () => {
  return (
    
    <div>
      
    <div className="text-center  bg-gradient-to-r from-purple-500 via-pink-500 to-red-500   mb-6 flex">
    <h1 className='m-auto'>Gonza Noticias</h1>
    <h2 className=''>Usuario</h2>
    </div>
    <div>
        <p className='text-center '>Volver a <button className='hover:bg-purple-600 rounded-md'> <Link to='/'>Inicio</Link></button></p>
    </div>
    </div>
    
    
)
}

export default HelloWorldApp;