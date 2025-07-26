// components/CadastroPage.jsx

import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './styles/Login.css'; // Reusing the same CSS file

// Helper function to get CSRF token from cookies
// This function needs to be defined if not already globally available
const getCookie = (name) => {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
};

function CadastroPage() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState(''); // State for email
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const API_BASE_URL = 'http://127.0.0.1:8000';

    const criarConta = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior (page reload)
        setLoading(true);
        setError(''); // Clear previous errors
        setSuccessMessage(''); // Clear previous success messages

        // Client-side validation for password confirmation
        if (password !== confirmPassword) {
            setError('As senhas não coincidem.');
            setLoading(false);
            return; // Stop the function execution
        }

        try {
            const resposta = await fetch(`${API_BASE_URL}/api/usuarios/criar-conta/`, {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': getCookie('csrftoken'),
                },
                body: JSON.stringify({
                    username: username, // Use the state variable
                    email: email,       // Use the state variable
                    password: password, // Use the state variable
                }),
            });

            if (!resposta.ok) {
                const erroData = await resposta.json();
                // Check if the error is specific (e.g., username/email already exists)
                if (erroData.username) {
                    setError(erroData.username[0]);
                } else if (erroData.email) {
                    setError(erroData.email[0]);
                } else {
                    setError(erroData.detail || 'Falha ao criar conta. Tente novamente.');
                }
                return; // Stop execution if there's an error response
            }

            // If response is OK (status 2xx)
            const sucessoData = await resposta.json();
            setSuccessMessage(sucessoData.detail); // Set success message
            console.log(sucessoData.detail);

            // Optionally, clear form fields after successful registration
            setUsername('');
            setEmail('');
            setPassword('');
            setConfirmPassword('');

            // Optionally, navigate to login page after a short delay
            setTimeout(() => {
                navigate('/login');
            }, 2000); // Navigate after 2 seconds

        } catch (err) {
            console.error("Erro na criação da conta:", err);
            setError('Ocorreu um erro de rede ou inesperado. Verifique sua conexão.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            {/* The CSS will be imported via './styles/Login.css' */}
            <div className="login-container">
                {/* Background Gradient / Blobs - for a more dynamic feel */}
                <div className="blob-background">
                    <div className="blob blob-1"></div>
                    <div className="blob blob-2"></div>
                    <div className="blob blob-3"></div>
                </div>

                <div className="login-card">
                    <div className="logo-section">
                        {/* Logo or Application Name */}
                        <span className="app-name">
                            Canes<span>Grill</span>
                        </span>
                    </div>
                    <h2 className="login-title">Crie sua conta</h2>

                    <form onSubmit={criarConta} className="login-form">
                        <div className="form-group">
                            <label htmlFor="username">Nome de Usuário</label>
                            <input
                                type="text"
                                id="username"
                                placeholder="Seu nome de usuário"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email" // Use type="email" for better validation
                                id="email"
                                placeholder="seuemail@exemplo.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
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

                        <div className="form-group">
                            <label htmlFor="confirmPassword">Confirmar Senha</label>
                            <input
                                type="password"
                                id="confirmPassword"
                                placeholder="Repita sua senha"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </div>

                        {error && (
                            <p className="error-message">{error}</p>
                        )}

                        {successMessage && (
                            <p className="success-message">{successMessage}</p>
                        )}

                        <button
                            type="submit"
                            className="login-button" // Reuses the login button style
                            disabled={loading} // Disable button while loading
                        >
                            {loading ? 'Cadastrando...' : 'Cadastrar'}
                        </button>
                    </form>

                    <div className="footer-links">
                        <p>
                            Já tem uma conta?{' '}
                            <Link to="/login" className="font-medium">
                                Faça login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CadastroPage;
