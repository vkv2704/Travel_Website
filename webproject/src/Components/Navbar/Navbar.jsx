import React, { useState } from 'react';
import './navbar.css';
import './navbar.scss';
import { Route, Routes, Link } from 'react-router-dom';
import Login from '../Signup/Login';
import Signup from '../Signup/Signup';
import { SiYourtraveldottv } from 'react-icons/si';
import { AiFillCloseCircle } from 'react-icons/ai';
import { AiOutlineBars } from 'react-icons/ai';

const Navbar = () => {
  const [active, setActive] = useState('navBar');

  const showNav = () => {
    setActive('navBar activeNavbar');
  }

  const removeNav = () => {
    setActive('navBar');
  }

  const [transparent,setTransparent] =useState('header');

  const bg =  ()=> {
    if(window.scrollY>=10){
        setTransparent('header activeHeader')
    }
    else{
        setTransparent('header')
    }
   
  }
  window.addEventListener('scroll',bg)

  return (
    <section className="navBarSection">
      <div className={transparent}>
        <div className="logoDiv">
          <Link to="/" className="logo">
            <h1>
              <SiYourtraveldottv className="icon" />
              Yātrāvihāra
            </h1>
          </Link>
        </div>
        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <Link to="/" className="navLink">
                Home
              </Link>
            </li>
            <li className="navItem">
              <Link to="/product" className="navLink">
                Product
              </Link>
            </li>
            <li className="navItem">
              <Link to="/resources" className="navLink">
                Resources
              </Link>
            </li>
            <li className="navItem">
              <Link to="/contacts" className="navLink">
                Contacts
              </Link>
            </li>
            <li className="navItem">
              <Link to="/blog" className="navLink">
                Blog
              </Link>
            </li>
            <div className="headerBtns flex">
              <button className="btn loginBtn">
                <Link to="/login">Login</Link>
              </button>
              <button className="btn signupBtn">
                <Link to="/signup">Sign Up</Link>
              </button>
            </div>
          </ul>

          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className="icon" />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <AiOutlineBars className="icon" />
        </div>
      </div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </section>
  );
};

export default Navbar;
