import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

// Importando os estilos e componentes
import './App.css';
// Crie e importe o CSS para a página Home
import './pages/styles/Home.css'; 

import Header from './components/Header';
import Footer from './components/Footer';
import Churras from './pages/Churras';
import PratoDetalhe from './pages/PratoDetalhe';
import Testar from './pages/Testar';

// Importando a imagem do banner
// Verifique se o caminho para sua imagem está correto
import bannerImage from './assets/tomate_banner.jpg'; 

// --- NOVO COMPONENTE HOME ---
function Home() {
  return (
    // 'main-home' é usado para sobrescrever o padding padrão do 'main'
    <main className="main-home"> 
      <section 
        className="hero-banner" 
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="hero-content">
          <h1>Sabor que Acende a Paixão</h1>
          <p>Descubra uma experiência autêntica onde cada corte de carne conta uma história.</p>
          <Link to="/churras" className="cta-button">
            Ver Cardápio
          </Link>
        </div>
      </section>

      {/* Você pode adicionar mais seções de conteúdo aqui abaixo do banner */}
      {/* <div style={{padding: '2rem 1rem', maxWidth: '960px', margin: '0 auto'}}>
        <h2>Sobre nós...</h2>
        <p>Mais conteúdo aqui...</p>
      </div>
      */}
    </main>
  );
}

// --- COMPONENTE APP ---
function App() {
  return (
    <div className="app-container">
      <Header />
      
      {/* O <main> foi movido para dentro de cada componente de página.
        Isso permite que a página Home tenha um layout de largura total,
        enquanto as outras páginas podem manter o container centralizado.
        Certifique-se que as páginas Churras e Testar tenham um <main> se necessário.
      */}
      <Routes>
        <Route path="/" element={<Home />} />
        
        <Route path="/churras/:pratoId" element={
        <main>
        <PratoDetalhe />
        </main>
        } />
        {/* Envolvendo a página Churras em um <main> para manter o layout original */}
        <Route path="/churras" element={
          <main>
            <Churras />
          </main>
        } />
        <Route path="/Testar" element={
          <main>
            <Testar />
          </main>
        } />
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;
