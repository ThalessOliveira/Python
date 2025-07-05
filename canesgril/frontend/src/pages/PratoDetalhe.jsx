import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './styles/PratoDetalhe.css'; 

import bannerImage from '../assets/tomate_banner.jpg';
import fotoReceitaPadrao from '../assets/foto_receita.png';

// URL base da sua API Django para facilitar a manutenção
const API_BASE_URL = 'http://127.0.0.1:8000';

function PratoDetalhe() {
  const { pratoId } = useParams();
  
  const [prato, setPrato] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPratoDetalhe = async () => {
      try {
        // CORREÇÃO: Removendo o '/churras/' da URL da API
        const response = await fetch(`${API_BASE_URL}/api/churras/pratos/${pratoId}/`);
        
        if (!response.ok) {
          throw new Error('Prato não encontrado');
        }
        
        const data = await response.json();
        setPrato(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPratoDetalhe();
  }, [pratoId]);

  if (loading) {
    return <div className="loading">Carregando detalhes do prato...</div>;
  }

  if (error || !prato) {
    return (
      <div className="prato-nao-encontrado">
        <h1>Oops!</h1>
        <p>Parece que o prato que você procura não está no nosso cardápio.</p>
        <Link to="/churras" className="btn-voltar">Voltar ao Cardápio</Link>
      </div>
    );
  }

  return (
    <div className="detalhe-wrapper">
      <div 
        className="detalhe-banner" 
        style={{ backgroundImage: `url(${bannerImage})` }}
        aria-label="Banner decorativo com tomates e ervas"
      ></div>

      <h1 className="detalhe-titulo">{prato.nome_prato}</h1>

      <section className="detalhe-main-content">
      <div className="detalhe-prato-imagem">
          {/* --- MUDANÇA 2: Lógica de renderização ajustada --- */}
          {prato.foto_prato_url ? (
            <img 
              // CORREÇÃO BÔNUS: A URL já vem completa da API
              src={prato.foto_prato_url} 
              alt={`Foto do prato ${prato.nome_prato}`} 
            />
          ) : (
            <img 
              src={fotoReceitaPadrao} 
              alt="Prato sem foto" 
            />
          )}
        </div>
        
        <div className="detalhe-meta-info">
          <div className="meta-item">
            <strong>Preparo</strong>
            <span>{prato.tempo_preparo} minutos</span>
          </div>
          <div className="meta-item">
            <strong>Rendimento</strong>
            <span>{prato.rendimento}</span>
          </div>
          <div className="meta-item">
            <strong>Preço</strong>
            <span>R$ {Number(prato.preco).toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
          </div>
        </div>
      </section>

      <section className="detalhe-bloco">
        <h2>Ingredientes</h2>
        <p>{prato.ingredientes}</p>
      </section>
      
      <section className="detalhe-bloco">
        <h2>Modo de Preparo</h2>
        <p>{prato.modo_preparo}</p>
      </section>

      <Link to="/churras" className="btn-voltar">
        &larr; Voltar ao Cardápio
      </Link>
    </div>
  );
}

export default PratoDetalhe;