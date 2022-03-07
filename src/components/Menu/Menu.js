import './Menu.css'
import logo from './Assets/aqty_logo.svg'
import { useState } from "react";

const Menu = ({menuColor}) => {
  const [menuState, setMenuState] = useState(false);
  const triggerMenu = () => {
    !menuState ? setMenuState(true) : setMenuState(false);
  }

  const determineBurgerColor = () => {
    if (menuColor === 'white') {
      return 'menuContainer__whiteMenuOpen'
    }
    if (menuColor === 'blue') {
      return 'menuContainer__blueMenuOpen'
    }
  }

  const scrollToTop = () => {
    const c = document.documentElement.scrollTop
    if (c > 0) {
      window.requestAnimationFrame(scrollToTop);
      window.scrollTo(0, c - c / 8);
    }
    setMenuState(false)
  };

  const scrollToBottom = () => {
    // Initialize scrolling
    window.scrollTo(window.scrollX, window.scrollY + 1);
    const c = document.documentElement.clientHeight
    const d = document.documentElement.scrollHeight
    const s = document.documentElement.scrollTop
    if (c + s < d) {
        window.scrollTo(0, s + s / 8);
        window.requestAnimationFrame(scrollToBottom);
    }
    setMenuState(false)
  };

  return (
    <div className="menuContainer">
      <button className={"nav__menuButton " + (!menuState ? determineBurgerColor() : 'menuContainer__whiteMenuClose')} onClick={triggerMenu}></button>
      <div className={"menuContainer__menuWrapper " + (menuState ? 'showMenu' : 'hideMenu')}>
          <ul className="nav">
              <span className="nav__logoContainer">
                  <img className="nav__logoImage" src={logo} alt="logo"/>
              </span>
              <span className="nav__mainMenu">
                  <li className="nav__listItem" onClick={scrollToTop}>Home</li>
                  <li className="nav__listItem">Deep Scape<span className="comingSoon">(Coming Soon)</span></li>
                  <li className="nav__listItem" onClick={scrollToBottom}>Contact</li>
              </span>
          </ul>
      </div>
    </div>
  )
}
  
export default Menu;