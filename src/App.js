import './App.css';
import { FaAngleDown, FaBars } from "react-icons/fa";
import { useState, useEffect } from 'react';

function App() {

    const [mobile, setMobile] = useState(false);
    const [sidebar, setSidebar] = useState(true);

    useEffect(() => {
      const handleResize = () => {
        if (window.innerWidth < 880) {
          setMobile(true);
        } else {
          setMobile(false);
        }
        setSidebar(false);
      };

      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize)
      }
    }, {});

    return (
        <div>
          {sidebar && mobile && <div className='sidebar'>
              <ul className='sidebar-items'>
                <li className='sidebar-item'>Inicio</li>
                <li className='sidebar-item'>Productos <FaAngleDown size={12}/></li>
                <li className='sidebar-item'>Nosotros</li>
                <li className='sidebar-item'>Precios</li>
              </ul>
              <ul className='sidebar-login'>
                <li className='sidebar-item'>Iniciar Sesión</li>
                <li className='sidebar-item'><button>Registrarse</button></li>
              </ul>
          </div>}
          <nav className='navbar'>
              {mobile && <button className='menu' onClick={() => {setSidebar(!sidebar)}}><FaBars size={32} /></button>}
              <a href='' className='navbar-logo'>+S</a>
              {!mobile && <>
              <ul className='navbar-items'>
                <li className='navbar-item-selected'>Inicio</li>
                <li className='navbar-item'>Productos <FaAngleDown size={12}/></li>
                <li className='navbar-item'>Nosotros</li>
                <li className='navbar-item'>Precios</li>
              </ul>
              <ul className='navbar-login'>
                <li className='navbar-item'>Iniciar Sesión</li>
                <li className='navbar-item'><button>Registrarse</button></li>
              </ul></>}
          </nav>
          <div className='content' onClick={() => {setSidebar(false)}}>
            <div className='left'>
              <h2>Esta es una prueba de Responsive Web Design</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam tortor non ante pretium hendrerit. Pelientesque habitant morbi tristique senectus</p>
              <button className='more'>Conocer Más</button>
              <button className='register'>Registrarse</button>
            </div>
            <div className='right'>
              <p>+S</p>
            </div>
          </div>
        </div>
    );
}

export default App;
