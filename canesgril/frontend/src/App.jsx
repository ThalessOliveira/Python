import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Importando os estilos e componentes
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Churras from './pages/churras';
import Testar from './pages/Testar';

// O componente Home pode continuar aqui ou ser movido para 'pages/Home.jsx'
function Home() {
  return (
    <div className="page-header">
      <img 
        src="/canesgril.png" 
        alt="Canes Grill Logo" 
        style={{ maxWidth: '180px' }} /* Adicione esta linha */
      />
      <h1>Bem-vindo ao Canes Grill!</h1>
      <h2>Sua paixão por churrasco começa aqui.</h2>
      <p style={{ marginTop: '2rem', fontSize: '1.1rem' }}>
        Explore nosso cardápio e descubra os sabores que fazem da nossa casa o seu lugar preferido.
      </p>
    </div>
  );
}

function App() {
  return (
    <div className="app-container">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/churras" element={<Churras />} />
          <Route path="/Testar" element={<Testar />} />
        </Routes>
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
