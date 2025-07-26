import React, { useState } from 'react'; // 1. Importar useState
import { Routes, Route, Link } from 'react-router-dom';

// Importando os estilos e componentes
import './App.css';
import './pages/styles/Home.css'; 

import Header from './components/Header';
import Footer from './components/Footer';
import Churras from './pages/Churras';
import PratoDetalhe from './pages/PratoDetalhe';
import LoginPage from './pages/Login';

// Importando a imagem do banner
import bannerImage from './assets/tomate_banner.jpg'; 
import CadastroPage from './pages/Cadastro';
import DashboardPage from './pages/Dashboard';

// --- COMPONENTE HOME (sem alterações) ---
function Home() {
  return (
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
    </main>
  );
}

// --- COMPONENTE APP (com ajustes) ---
function App() {
  // 2. Criar o estado para o termo de busca aqui no componente pai.
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="app-container">
      {/* 3. Passar o estado e a função para o Header */}
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      
      <Routes>
        <Route path="/" element={<Home />} />
        
        {/* A rota de detalhe não precisa do termo de busca */}
        <Route path="/churras/:pratoId" element={
          <main>
            <PratoDetalhe />
          </main>
        } />

        {/* 4. Passar o termo de busca para a página Churras */}
        <Route path="/churras" element={
          <main>
            <Churras searchTerm={searchTerm} />
          </main>
        } />
        <Route path="/login" element={<LoginPage />}/>

        <Route path="/cadastro" element={<CadastroPage />}/>

        <Route path='/dashboard' element={<DashboardPage />}/>
        
      </Routes>
      
      <Footer />
    </div>
  );
}

export default App;