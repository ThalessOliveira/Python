// components/Header.jsx

import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

function Logo() {
  return <img src="/canesgril.png" alt="Canes Grill Logo" onError={(e) => { e.currentTarget.src = 'https://placehold.co/100x50/2e2e2e/af4c0f?text=Logo'; }} />;
}

// Recebe as props 'searchTerm' e 'setSearchTerm' do App.jsx
function Header({ searchTerm, setSearchTerm }) {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const navigate = useNavigate();

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault(); // Previne o recarregamento da página
    // Navega para a página de churrasco para mostrar os resultados
    navigate('/churras');
  };

  return (
    <header className={`app-header ${isSearchVisible ? 'search-active' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo-container">
          <Logo />
          <h1>Canes Grill</h1>
        </Link>
        <nav className="main-nav">
          <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
          <NavLink to="/churras" className={({ isActive }) => (isActive ? 'active' : '')}>Churrasco</NavLink>
          <NavLink to="/testar" className={({ isActive }) => (isActive ? 'active' : '')}>Testar</NavLink>
          <button onClick={toggleSearch} className="search-icon" aria-label="Abrir pesquisa">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </nav>
      </div>

      <div className={`search-bar-container ${isSearchVisible ? 'visible' : ''}`}>
        {/* Usamos um formulário para melhor acessibilidade e controle */}
        <form onSubmit={handleSearchSubmit}>
          <input 
            type="text" 
            className="search-input" 
            placeholder="O que você procura?"
            value={searchTerm} // O valor vem do estado do App.jsx
            onChange={(e) => setSearchTerm(e.target.value)} // A função atualiza o estado no App.jsx
          />
        </form>
      </div>
    </header>
  );
}

export default Header;