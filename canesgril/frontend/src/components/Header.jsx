import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

// O componente Logo pode continuar aqui ou ser movido para outro arquivo
function Logo() {
  // Use um placeholder se a imagem não estiver disponível no preview
  return <img src="/canesgril.png" alt="Canes Grill Logo" onError={(e) => { e.currentTarget.src = 'https://placehold.co/100x50/2e2e2e/af4c0f?text=Logo'; }} />;
}

function Header() {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  // Função para alternar a visibilidade da barra de pesquisa
  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  return (
    // Adicione a classe 'search-active' ao header para ajustes de layout se necessário
    <header className={`app-header ${isSearchVisible ? 'search-active' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo-container">
          <Logo />
          <h1>Canes Grill</h1>
        </Link>
        <nav className="main-nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
            Home
          </NavLink>
          <NavLink to="/churras" className={({ isActive }) => (isActive ? 'active' : '')}>
            Churrasco
          </NavLink>
          <NavLink to="/Testar" className={({ isActive }) => (isActive ? 'active' : '')}>
            Testar
          </NavLink>
          {/* Ícone de Pesquisa */}
          <button onClick={toggleSearch} className="search-icon" aria-label="Abrir pesquisa">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </nav>
      </div>

      {/* Barra de Pesquisa Animada */}
      <div className={`search-bar-container ${isSearchVisible ? 'visible' : ''}`}>
        <input 
          type="text" 
          className="search-input" 
          placeholder="O que você procura?" 
        />
      </div>
    </header>
  );
}

export default Header;
