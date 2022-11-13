import React, { useState } from "react";
// Icons
import {
  RiHome3Line,
  RiFileCopyLine,
  RiWalletLine,
} from "react-icons/ri";
import Logo4 from '../../logos/Logo4'
import './Sidebar.css'
import {Link} from 'react-router-dom'

const Sidebar = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <>
    
    
    
      <div
        className={`bg-primary-900 h-full fixed lg:static w-[80%] md:w-[40%] lg:w-full transition-all z-50 duration-300 ${
          showMenu ? "left-0" : "-left-full"
        }`}
      >
        {/* Profile */}
        <div className="flex flex-col items-center justify-center p-8 gap-2 h-[30vh]">
            <Logo4/>
        </div>
        {/* Nav */}
        <div className="bg-primary-300 p-8 rounded-tr-[100px] h-[70vh] flex flex-col justify-between gap-8">
          <nav className="flex flex-col gap-8 ">
            <Link
            to="/"
            className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <RiHome3Line /> Inicio
            </Link>
           

            <Link
              to="/viaje"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <RiFileCopyLine /> Viaje
            </Link>
            
            <Link
              to="/progreso"
              className="flex items-center gap-4 text-white py-2 px-4 rounded-xl hover:bg-primary-900/50 transition-colors"
            >
              <RiWalletLine /> Progreso
            </Link>
          </nav>
          <div className="bg-primary-900/50 text-white p-4 rounded-xl">
            <p className="text-gray-400">¿Tienes problemas?</p>
            <Link to="/contacto">Contactanos</Link>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Sidebar;
