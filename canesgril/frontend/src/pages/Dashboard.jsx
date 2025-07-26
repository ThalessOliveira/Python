import React, { useState, useEffect } from 'react';
import './styles/Dashboard.css';
import EditDishModal from '../components/EditDishModal'; 
import '../components/styles/EditDishModal.css';
import AddDishModal from '../components/AddDishModal';'../components/AddDishModal'

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

// Ícones para os botões
const EditIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path></svg>
  );
  
  const DeleteIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
  );
  
  const AddIcon = () => (
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
  );
  
  
  export default function DashboardPage() {
      const [isEditModalOpen, setIsEditModalOpen] = useState(false);
      const [isAddModalOpen, setIsAddModalOpen] = useState(false);
      const [dishToEdit, setDishToEdit] = useState(null);
  
      const [pratos, setPratos] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
  
      const fetchPratos = async () => {
          setLoading(true);
          try {
              const response = await fetch('/api/usuarios/pratos/listar/');
              if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
              const data = await response.json();
              setPratos(data);
          } catch (e) {
              console.error("Falha ao buscar pratos:", e);
              setError("Não foi possível carregar o cardápio. Tente novamente mais tarde.");
          } finally {
              setLoading(false);
          }
      };
  
      useEffect(() => {
          fetchPratos();
      }, []);
  
      // Funções para controlar o modal de EDIÇÃO
      const handleOpenEditModal = (prato) => {
          setDishToEdit(prato);
          setIsEditModalOpen(true);
      };
      const handleCloseEditModal = () => {
          setIsEditModalOpen(false);
          setDishToEdit(null);
      };
      const handleSaveEditedDish = (updatedDish) => {
          console.log("Salvando prato editado:", updatedDish);
          // Futuramente, após a chamada da API, recarregamos a lista
          // fetchPratos(); 
          handleCloseEditModal();
      };
  
      // ✅ 3. Funções para controlar o modal de CRIAÇÃO
      const handleOpenAddModal = () => {
          setIsAddModalOpen(true);
      };
      const handleCloseAddModal = () => {
          setIsAddModalOpen(false);
      };
      const handleSaveNewDish = async (formData) => {
        try {
            const response = await fetch('/api/usuarios/pratos/criar/', {
                method: 'POST',
                credentials: 'include',
                headers: {
                    'X-CSRFToken': getCookie('csrftoken'),
                },
                body: formData,
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Falha ao criar o prato. Verifique os dados.');
            }

            const result = await response.json();
            console.log(result.message);
            fetchPratos();
            handleCloseAddModal();

        } catch (e) {
            console.error('Erro ao criar prato:', e);
            alert(`Erro ao criar prato: ${e.message}`); 
        }
    };
      
      if (loading) return <div className="dashboard-container"><div className="loading-message">Carregando cardápio...</div></div>;
      if (error) return <div className="dashboard-container"><div className="error-message">{error}</div></div>;
  
      return (
          <>
              <div className="dashboard-container">
                  <header className="dashboard-header">
                      <h1>Gerenciamento do Cardápio</h1>
                      {/* ✅ 4. Botão de adicionar agora abre o modal de criação */}
                      <button onClick={handleOpenAddModal} className="btn btn-primary">
                          <AddIcon />
                          <span>Adicionar Novo Prato</span>
                      </button>
                  </header>
  
                  <main className="dashboard-content">
                      <div className="dish-list-container">
                          {pratos.length === 0 ? (
                              <div className="dish-card-placeholder">
                                  <p>Nenhum prato cadastrado ainda. Clique em "Adicionar Novo Prato" para começar.</p>
                              </div>
                          ) : (
                              pratos.map(prato => (
                                  <div className="dish-card" key={prato.id}>
                                      <img src={prato.foto_prato_thumb_url || 'https://placehold.co/150x150/2a2a2a/ffffff?text=Sem+Foto'} alt={`Foto do prato ${prato.nome_prato}`} className="dish-photo" />
                                      <div className="dish-info">
                                          <h3>{prato.nome_prato}</h3>
                                          <p className="dish-category">{prato.categoria}</p>
                                          <p className="dish-price">R$ {prato.preco}</p>
                                      </div>
                                      <div className="dish-actions">
                                          <button onClick={() => handleOpenEditModal(prato)} className="btn btn-secondary" title="Editar Prato">
                                              <EditIcon />
                                          </button>
                                          <button className="btn btn-danger" title="Excluir Prato">
                                              <DeleteIcon />
                                          </button>
                                      </div>
                                  </div>
                              ))
                          )}
                      </div>
                  </main>
              </div>
  
              {/* Renderiza o modal de EDIÇÃO */}
              {isEditModalOpen && (
                  <EditDishModal 
                      dishToEdit={dishToEdit}
                      onClose={handleCloseEditModal}
                      onSave={handleSaveEditedDish}
                  />
              )}
  
              {/* ✅ 5. Renderiza o modal de CRIAÇÃO */}
              <AddDishModal 
                  isOpen={isAddModalOpen}
                  onClose={handleCloseAddModal}
                  onSave={handleSaveNewDish}
              />
          </>
      );
  }
