import React, { useState } from "react";
import "./nav.css";
import {AiTwotoneHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {TbMessage2} from 'react-icons/tb'
const Nav = () => {
  const [ActiveNav, setActiveNav] = useState("#");
  return (
    <>
      <nav>
        <a
          href="#"
          onClick={() => setActiveNav("#")}
          className={ActiveNav === "#" ? "active" : ""}
        >
          <AiTwotoneHome/>
        </a>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={ActiveNav === "#about" ? "active" : ""}
        >
         <AiOutlineUser/>
        </a>
        <a
          href="#experience"
          onClick={() => setActiveNav("#experience")}
          className={ActiveNav === "#experience" ? "active" : ""}
        >
         <BiBook/>
        </a>
        <a
          href="#services"
          onClick={() => setActiveNav("#services")}
          className={ActiveNav === "#services" ? "active" : ""}
        >
         <RiServiceLine/>
        </a>
        <a
          href="#contact"
          onClick={() => setActiveNav("#contact")}
          className={ActiveNav === "#contact" ? "active" : ""}
        >
          <TbMessage2/>
        </a>
      </nav>
    </>
  );
};
export default Nav;
