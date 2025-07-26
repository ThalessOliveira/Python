// components/LoginPage.jsx

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles/Login.css';
const API_BASE_URL = 'http://localhost:8000'

const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
};

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        console.log('Botão clicado, iniciando handleLogin...');

        try {

            console.log('Tentando fazer a requisição fetch para /api/usuarios/login/');

            const response = await fetch(`${API_BASE_URL}/api/usuarios/login/`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCookie('csrftoken'),
                },
                body: JSON.stringify({ username, password }),
            });

            console.log('Resposta recebida do servidor:', response);

            if (!response.ok) {
                const errorData = await response.json();
                setError(errorData.detail || 'Erro ao fazer login. Tente novamente.');
                return;
            }

            const successData = await response.json();
            console.log(successData.detail);
            navigate('/'); 
            window.location.reload();

        } catch (err) {
            console.error('ERRO CRÍTICO no handleLogin:', err);
            setError('Ocorreu um erro de rede ou inesperado. Verifique o console.');
        } finally {
            setLoading(false);
        }
    };

  return (
    <>
      <div className="login-container">
        <div className="blob-background">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>

        <div className="login-card">
          <div className="logo-section">
            <span className="app-name">
              Canes<span>Grill</span>
            </span>
          </div>
          <h2 className="login-title">Acesse sua conta</h2>

          <form className="login-form" onSubmit={handleLogin}>
                        <div className="form-group">
                            <label htmlFor="username">Usuário</label>
                            <input
                                type="text"
                                id="username"
                                placeholder="Usuário"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="password">Senha</label>
                            <input
                                type="password"
                                id="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>

                        {error && (
                            <p className="error-message">{error}</p>
                        )}

                        <button
                            type="submit"
                            className="login-button"
                            disabled={loading}
                        >
                            {loading ? 'Entrando...' : 'Entrar'}
                        </button>
                    </form>

          <div className="footer-links">
            <p>
              Não tem uma conta?{' '}
              <Link to="/cadastro" className="font-medium">
                Cadastre-se
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
