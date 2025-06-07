// frontend/src/pages/Churras.jsx
import React from 'react';

function Churras() {
  return (
    <>
      <header className="page-header">
        <h1>Nosso Cardápio</h1>
        <h2>O melhor do churrasco, direto da brasa para sua mesa!</h2>
      </header>
      
      <table className="churras-table">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Nome do Prato</th>
            <th>Resumo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Churrasco</td>
            <td>Picanha</td>
            <td>
              Considerada por muitos como a mais nobre e procurada carne de 
              churrasco, a picanha pode ser servida ao ponto, malpassada ou 
              bem passada. Suculenta e com sua característica capa de gordura.
            </td>
          </tr>
          {/* Você pode adicionar mais pratos aqui */}
          <tr>
            <td>Acompanhamento</td>
            <td>Pão de Alho</td>
            <td>
              Cremoso e crocante, nosso pão de alho artesanal é o acompanhamento
              perfeito para qualquer corte.
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default Churras;
