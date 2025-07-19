// pages/Churras.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/Churras.css';
import fotoReceitaPadrao from '../assets/foto_receita.png';

const API_BASE_URL = 'http://127.0.0.1:8000';

// Recebe a prop 'searchTerm' do App.jsx
function Churras({ searchTerm }) {
  const [apiData, setApiData] = useState({ results: [], next: null, previous: null, count: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentUrl, setCurrentUrl] = useState(`${API_BASE_URL}/api/churras/pratos/`);

  useEffect(() => {
    if (searchTerm) {
      const searchUrl = `${API_BASE_URL}/api/churras/pratos/?search=${encodeURIComponent(searchTerm)}`;
      setCurrentUrl(searchUrl)
    } else {
      setCurrentUrl(`${API_BASE_URL}/api/churras/pratos/`);
    }
  }, [searchTerm]);

  useEffect(() => {
    const fetchPratos = async () => {
      setLoading(true);
      try {
        const response = await fetch(currentUrl);
        if (!response.ok) {
          throw new Error('Não foi possível buscar os dados da API');
        }
        const data = await response.json();
        setApiData(data); // Salva o objeto completo da API
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPratos();
  }, [searchTerm, currentUrl]);


  // --- FUNÇÕES PARA OS BOTÕES DE PAGINAÇÃO ---
  const handleNext = () => {
    if (apiData.next) {
      setCurrentUrl(apiData.next);
    }
  };

  const handlePrevious = () => {
    if (apiData.previous) {
      setCurrentUrl(apiData.previous);
    }
  };


  if (loading) {
    return <p>Buscando pratos...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <>
      <header className="page-header">
        <h1>Nosso Cardápio</h1>
        {searchTerm ? <h2>Resultados para: "{searchTerm}"</h2> : <h2>O melhor do churrasco, direto da brasa para sua mesa!</h2>}
      </header>
      
      <div className="recipe-cards-container">
        {/* O map agora usa apiData.results */}
        {apiData.results.length > 0 ? (
          apiData.results.map((prato) => (
            <Link to={`/churras/${prato.id}`} key={prato.id} className="recipe-card-link">
              <article className="recipe-card">
                <div className="recipe-card-image-container">
                  {prato.foto_prato_thumb_url ? (
                    <img src={prato.foto_prato_thumb_url} alt={`Foto do prato ${prato.nome_prato}`} className="recipe-card-image" />
                  ) : (
                    <img src={fotoReceitaPadrao} alt="Prato sem foto" className="recipe-card-image" />
                  )}
                </div>
                <div className="separator-line"></div>
                <div className="recipe-card-content">
                  <h3>{prato.nome_prato}</h3>
                  <p className="recipe-card-price">
                    R$ {Number(prato.preco).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                  </p>
                  {prato.funcionario && <p>Por: {prato.funcionario.nome_completo}</p>}
                </div>
              </article>
            </Link>
          ))
        ) : (
          <p className="no-results">Nenhum prato encontrado com este nome.</p>
        )}
      </div>
      <div className="pagination-controls">
        <button onClick={handlePrevious} disabled={!apiData.previous}>
          Anterior
        </button>
        <button onClick={handleNext} disabled={!apiData.next}>
          Próxima
        </button>
      </div>
    </>
  );
}

export default Churras;