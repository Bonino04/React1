import { Link } from "react-router-dom"


export const HelloWorldApp = () => {
  return (
    <div>
    <div className="text-center  bg-gradient-to-r from-purple-500 via-pink-500 to-red-500   mb-6 flex">
    <h1 className='m-auto'>Gonza Noticias</h1>
    <h2 className=''>Usuario</h2>
    </div>
    <div className="stat">
     <div className="stat-title">Personas que vieron la pagina</div>
     <div className="stat-value">89,400</div>
     <div className="stat-desc">21% more than last month</div>
   </div>
    <div>
        <p className='text-center '>Volver a <button className='hover:bg-purple-600 rounded-md'> <Link to='/'>Inicio</Link></button></p>
    </div>
    </div>
    
)
}

export default HelloWorldApp;