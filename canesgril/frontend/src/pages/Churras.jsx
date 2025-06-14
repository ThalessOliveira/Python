import React from 'react';
import { Link } from 'react-router-dom'; // 1. Importar o Link
import './styles/Churras.css';

// 2. Importar os dados do novo arquivo
import pratosData from '../data/pratos';

function Churras() {
  return (
    <>
      <header className="page-header">
        <h1>Nosso Cardápio</h1>
        <h2>O melhor do churrasco, direto da brasa para sua mesa!</h2>
      </header>
      
      <div className="recipe-cards-container">
        {pratosData.map((prato) => (
          // 3. Envolver o card com o componente Link
          <Link to={`/churras/${prato.id}`} key={prato.id} className="recipe-card-link">
            <article className="recipe-card">
              <div className="recipe-card-image-container">
                  <img src={prato.imagem} alt={`Foto do prato ${prato.titulo}`} className="recipe-card-image" />
              </div>
              <div className="separator-line"></div>
              <div className="recipe-card-content">
                <h3>{prato.titulo}</h3>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Churras;
