/* eslint-disable jsx-a11y/anchor-is-valid */
import React ,{useState} from "react";
import '../styles/navBar.scss'
//styles
import "../styles/header.css";
function Header() {
  const [isOpen, setOpen] = useState(false);
  function handleCheck(e) {
    setOpen(e.target.checked);
  }
  return (
    <header className={`${isOpen?'active':''}`}> 
      <div className="menu-icon">
        <input
          className="menu-icon__cheeckbox"
          type="checkbox"
          checked={isOpen}
          onChange={handleCheck}
        />
        <div>
          <span></span>
          <span></span>
        </div>
      </div>
      <h1 className="brandName">room</h1>
      <nav className={`navLink ${isOpen?'active':''}`}>
        {isOpen&&<span className="close" onClick={()=>{setOpen(false)}}>&times;</span>}
        <ul className="navLink__link">
          <li className="link">
            <a href="#">Home</a>
          </li>
          <li className="link">
            <a href="#">shop</a>
          </li>
          <li className="link">
            <a href="#">about</a>
          </li>
          <li className="link">
            <a href="#">contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
