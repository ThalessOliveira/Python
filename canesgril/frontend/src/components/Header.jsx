import React from 'react';
import { Link, NavLink } from 'react-router-dom';

// O componente Logo agora vive dentro do Header
function Logo() {
  return (
    <img src="/canesgril.png" alt="Canes Grill Logo" />
  );
}

function Header() {
  return (
    <header className="app-header">
      {/* Este container interno centralizará o conteúdo do cabeçalho */}
      <div className="header-container">
        <Link to="/" className="logo-container">
          <Logo />
          <h1>Canes Grill</h1>
        </Link>
        <nav className="main-nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Início
          </NavLink>
          <NavLink to="/churras" className={({ isActive }) => (isActive ? 'active' : '')}>
            Cardápio
          </NavLink>
          <NavLink to="/Testar" className={({ isActive }) => (isActive ? 'active' : '')}>
            Testar
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
