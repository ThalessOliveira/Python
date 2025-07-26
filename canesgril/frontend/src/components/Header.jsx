// components/Header.jsx

import React, { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Logo() {
  return <img src="/canesgril.png" alt="Canes Grill Logo" onError={(e) => { e.currentTarget.src = 'https://placehold.co/100x50/2e2e2e/af4c0f?text=Logo'; }} />;
}

// Recebe as props 'searchTerm' e 'setSearchTerm' do App.jsx
function Header({ searchTerm, setSearchTerm }) {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    navigate('/churras');
  };

  const getCookie = (name) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/usuarios/check-auth/', {
          method: 'GET',
          credentials: 'include',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          setIsAuthenticated(data.authenticated);
          setIsAdmin(data.is_superuser || false);
          if (data.authenticated) {
            setUsername(data.username);
          }
        }
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error);
      }
    };

    checkAuth();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch('http://localhost:8000/api/usuarios/logout/', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
          'X-CSRFToken': getCookie('csrftoken'),
        },
      });

      if (response.ok) {
        setIsAuthenticated(false);
        setIsAdmin(false);
        setUsername('');
        navigate('/');
      }
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <header className={`app-header ${isSearchVisible ? 'search-active' : ''}`}>
      <div className="header-container">
        <Link to="/" className="logo-container">
          <Logo />
          <h1>Canes Grill</h1>
        </Link>
        <nav className="main-nav">
          {isAuthenticated ? (
          <>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
            <NavLink to="/churras" className={({ isActive }) => (isActive ? 'active' : '')}>Churrasco</NavLink>
            {isAdmin &&( 
              <NavLink to="/admin">Admin</NavLink>
            )}
            <NavLink to="#" onClick={handleLogout} className={({ isActive }) => (isActive ? 'active' : '')}>Logout</NavLink>
          </>
          ) : (
          <>
            <NavLink to="/login">Login</NavLink>
            <NavLink to="/cadastro">Cadastro</NavLink>
          </>
          )}
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