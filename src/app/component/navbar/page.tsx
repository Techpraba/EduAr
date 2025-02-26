'use client'
import React, { useState } from 'react';
import Link from 'next/link';
import './Navbar.css';

import { FaSearch } from "react-icons/fa";
import { MdOutlineCancel } from "react-icons/md";
import { IoMenuOutline } from "react-icons/io5";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="NavbarOverall">
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? <MdOutlineCancel size={24} /> :<IoMenuOutline  size={24}/>}
      </div>

      <div className={`navlink ${isOpen ? 'open' : ''} `} >
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/features">Features</Link>
        <Link href="/store">Store</Link>
        <Link href="/blog">Blog</Link>
      </div>

      <h1 className="headline">EDUAR</h1>

      <div className="leftSideNavbar">
        <input type="text" placeholder="Search..." />
        <FaSearch size={24} className='searchicon' />
        <button>Signup</button>
      </div>
    </div>
  );
}

export default Navbar;
