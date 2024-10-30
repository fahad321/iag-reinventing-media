// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="bg-accenturePrimary text-white p-4">
      <nav className="flex justify-between items-center">
        <Link to="/home" className="text-2xl font-bold">IAG Media</Link>
        <ul className="flex space-x-4">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;