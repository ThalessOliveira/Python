import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './styles/Churras.css';
import fotoReceitaPadrao from '../assets/foto_receita.png';

const API_BASE_URL = 'http://127.0.0.1:8000';

function Churras() {
  const [pratos, setPratos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPratos = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/churras/pratos/`);
        
        if (!response.ok) {
          throw new Error('Não foi possível buscar os dados da API');
        }
        
        const data = await response.json();
        setPratos(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPratos();
  }, []);

  if (loading) {
    return <p>Carregando cardápio...</p>;
  }

  if (error) {
    return <p>Erro: {error}</p>;
  }

  return (
    <>
      <header className="page-header">
        <h1>Nosso Cardápio</h1>
        <h2>O melhor do churrasco, direto da brasa para sua mesa!</h2>
      </header>
      
      <div className="recipe-cards-container">
        {pratos.map((prato) => (
          <Link to={`/churras/${prato.id}`} key={prato.id} className="recipe-card-link">
            <article className="recipe-card">
              <div className="recipe-card-image-container">
                {prato.foto_prato_url ? (
                  <img 
                      src={prato.foto_prato_url} 
                      alt={`Foto do prato ${prato.nome_prato}`} 
                      className="recipe-card-image" 
                  />
                ) : (
                  // --- MUDANÇA 2: Usar a imagem padrão no lugar do placeholder ---
                  <img 
                      src={fotoReceitaPadrao} 
                      alt="Prato sem foto" 
                      className="recipe-card-image" 
                  />
                )}
              </div>
              <div className="separator-line"></div>
              <div className="recipe-card-content">
                <h3>{prato.nome_prato}</h3>
                
                <p className="recipe-card-price">
                  R$ {Number(prato.preco).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
                </p>

                {/* Adicionando a verificação de segurança para o funcionário */}
                {prato.funcionario && (
                    <p>
                        Por: {prato.funcionario.nome_completo}
                    </p>
                )}

              </div>
            </article>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Churras;