import React, {useState} from 'react'
import './Header.css'

const Header = () => {
 /* *******************Toggle Menu****************** */
    const [toggle, setToggle] = useState(false)
    function showMenu(){
        setToggle(true)
    }
    

  return (
    <header className='header'>
      <nav className="nav container">
        <a href="index.html" style={{fontSize: "1.6rem", fontWeight: "2rem"}} >Syed Zain Aly</a>

        <div className={toggle ? "nav__menu show-menu" :"nav__menu"}>
            <ul className="nav__list grid">

                <li className="nav__item">
                    <a href="#home" className="nav__link">
                        <i className="uil uil-home nav__icon"></i>Home
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#about" className="nav__link">
                        <i className="uil uil-user nav__icon"></i>about
                    </a>
                </li>
                

                <li className="nav__item">
                    <a href="#skills" className="nav__link">
                        <i className="uil uil-file-alt nav__icon"></i>skills
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#service" className="nav__link">
                        <i className="uil uil-briefcase nav__icon"></i>service
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#qualification" className="nav__link">
                        <i className="uil uil-scenery nav__icon"></i>portfolio
                    </a>
                </li>

                <li className="nav__item">
                    <a href="#contact" className="nav__link">
                        <i className="uil uil-message nav__icon"></i>contact
                    </a>
                </li>
            </ul>

            {/* <i className='uil uil-times nav__item'></i> */}
        </div>
        <div className="nav__toggle" onClick={() => showMenu(!toggle)}>
        {/* <i className='uil uil-apps'></i> */}
        </div>
      </nav>
    </header>
  )
}

export default Header