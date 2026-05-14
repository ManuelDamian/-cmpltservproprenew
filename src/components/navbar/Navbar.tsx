import { useState } from 'react';
import './Navbar.scss';

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className={`navbar__links ${isOpen ? 'open' : ''}`}>
        <a href="#home" onClick={() => setIsOpen(false)}>Home</a>
        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
        <a href="#promise" onClick={() => setIsOpen(false)}>Promise</a>
        <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
      </div>
      <div className="navbar__info" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}