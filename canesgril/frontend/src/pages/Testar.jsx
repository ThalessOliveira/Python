import React, { useState, useEffect } from 'react';

function Testar() {
  const [mensagem, setarMensagem] = useState('Testando comunicação...');
  const [estado, setarEstado] = useState();
  const [carregando, setarCarregando] = useState(true);
  const [erro, setarErro] = useState(null);

  useEffect(() => {
    // A função para buscar dados da API
    const buscarDados = async () => {
      try {
        // O Vite irá redirecionar esta chamada para http://127.0.0.1:8000/api/test/
        // graças à configuração do proxy no vite.config.js
        const resposta = await fetch('/api/churras/testar');
        
        if (!resposta.ok) {
          throw new Error(`HTTP error! status: ${resposta.estado}`);
        }
        
        const dados = await resposta.json();
        setarMensagem(dados.mensagem); // Atualiza a mensagem com a resposta da API
        setarEstado(dados.estado)
      } catch (e) {
        console.error("Erro ao buscar dados da API:", e);
        setarErro("Falha ao comunicar com o servidor. Verifique o console para mais detalhes.");
      } finally {
        setarCarregando(false);
      }
    };

    buscarDados();
  }, []); // O array vazio [] garante que o useEffect rode apenas uma vez

  // Estilos inline para o feedback visual
  const EstiloCaixaStatus = {
    padding: '2rem',
    borderRadius: '8px',
    textAlign: 'center',
    backgroundColor: '#1f1f1f',
    border: '1px solid #444'
  };

  const EstiloErro = {
    ...EstiloCaixaStatus,
    backgroundColor: '#4d2a2a',
    borderColor: '#ff3131'
  }

  const EstiloSucesso = {
    ...EstiloCaixaStatus,
    backgroundColor: '#2a4d36',
    borderColor: '#3a9d5d'
  }

  if (carregando) {
    return <div style={EstiloCaixaStatus}><h2>{mensagem}</h2></div>;
  }

  if (erro) {
    return <div style={EstiloErro}><h2>Erro de Comunicação</h2><p>{erro}</p></div>;
  }

  return <div style={EstiloSucesso}><h2>Status da Conexão</h2><p>{mensagem}</p><p>{estado}</p></div>;
}

export default Testar;