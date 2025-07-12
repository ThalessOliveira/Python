// pages/Churras.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/Churras.css';
import fotoReceitaPadrao from '../assets/foto_receita.png';

const API_BASE_URL = 'http://127.0.0.1:8000';

// Recebe a prop 'searchTerm' do App.jsx
function Churras({ searchTerm }) {
  // --- ESTADOS ATUALIZADOS PARA PAGINAÇÃO ---
  const [apiData, setApiData] = useState({ results: [], next: null, previous: null, count: 0 });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // Estado para controlar a URL da página atual (seja de busca ou de paginação)
  const [currentUrl, setCurrentUrl] = useState(`${API_BASE_URL}/api/churras/pratos/`);

  // --- USEEFFECT ATUALIZADO ---
  useEffect(() => {
    // Se um termo de busca for digitado, a prioridade é buscar por ele,
    // resetando para a primeira página dos resultados da busca.
    // Senão, ele usa a currentUrl (que pode ser a página 2, 3, etc.).
    const urlToFetch = searchTerm
      ? `${API_BASE_URL}/api/churras/pratos/?search=${encodeURIComponent(searchTerm)}`
      : currentUrl;

    const fetchPratos = async () => {
      setLoading(true);
      try {
        const response = await fetch(urlToFetch);
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
  // O useEffect agora reage a mudanças na busca OU na URL da página
  }, [searchTerm, currentUrl]);


  // --- FUNÇÕES PARA OS BOTÕES DE PAGINAÇÃO ---
  const handleNext = () => {
    // Se a busca estiver ativa, não permite paginar para não sair dos resultados da busca
    if (apiData.next && !searchTerm) {
      setCurrentUrl(apiData.next);
    }
  };

  const handlePrevious = () => {
    if (apiData.previous && !searchTerm) {
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

      {/* --- SEÇÃO DE PAGINAÇÃO ADICIONADA --- */}
      {/* Os botões só aparecem se não houver uma busca ativa */}
      {!searchTerm && (
        <div className="pagination-controls">
          <button onClick={handlePrevious} disabled={!apiData.previous}>
            Anterior
          </button>
          <button onClick={handleNext} disabled={!apiData.next}>
            Próxima
          </button>
        </div>
      )}
    </>
  );
}

export default Churras;