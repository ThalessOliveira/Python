import React from 'react';
import { useParams, Link } from 'react-router-dom';
import pratosData from '../data/pratos';
import './styles/PratoDetalhe.css'; 

// Imagem do banner - ajuste o caminho no seu projeto real
import bannerImage from '../assets/tomate_banner.jpg';

function PratoDetalhe() {
  const { pratoId } = useParams();
  const prato = pratosData.find(p => p.id === parseInt(pratoId));

  if (!prato) {
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
      {/* 1. Banner Superior */}
      <div 
        className="detalhe-banner" 
        style={{ backgroundImage: `url(${bannerImage})` }}
        aria-label="Banner decorativo com tomates e ervas"
      ></div>

      {/* 2. Título do Prato */}
      <h1 className="detalhe-titulo">{prato.titulo}</h1>

      {/* 3. Conteúdo Principal (Imagem + Informações) */}
      <section className="detalhe-main-content">
        <div className="detalhe-prato-imagem">
          <img src={prato.imagem} alt={`Foto do prato ${prato.titulo}`} />
        </div>
        
        {/* A linha verde vertical é aplicada via CSS */}
        <div className="detalhe-meta-info">
          <div className="meta-item">
            <strong>Preparo</strong>
            <span>{prato.preparo}</span>
          </div>
          <div className="meta-item">
            <strong>Rendimento</strong>
            <span>{prato.rendimento}</span>
          </div>
          <div className="meta-item">
            <strong>Categoria</strong>
            <span>{prato.categoria}</span>
          </div>
        </div>
      </section>

      {/* 4. Bloco de Descrição */}
      <section className="detalhe-descricao">
        <h2>Descrição do Prato</h2>
        <p>{prato.descricao}</p>
      </section>

      <Link to="/churras" className="btn-voltar">
        &larr; Voltar ao Cardápio
      </Link>
    </div>
  );
}

export default PratoDetalhe;
