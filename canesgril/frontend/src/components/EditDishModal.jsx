import React, { useState, useEffect } from 'react';
import './styles/EditDishModal.css'; // Estilos específicos para o modal

// Ícone para fechar o modal
const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

// O 'dishToEdit' será o objeto do prato vindo da DashboardPage.
// 'onClose' é a função para fechar o modal.
// 'onSave' será a função para salvar as alterações.
export default function EditDishModal({ dishToEdit, onClose, onSave }) {
    // Se não houver prato para editar, não renderiza nada.
    if (!dishToEdit) {
        return null;
    }

    // Estado para gerenciar os dados do formulário.
    // Inicializa com os dados do prato a ser editado.
    const [formData, setFormData] = useState({
        nome_prato: dishToEdit.nome || '',
        ingredientes: dishToEdit.ingredientes || 'Tomate, alface, queijo',
        modo_preparo: dishToEdit.modo_preparo || 'Misture tudo e sirva.',
        tempo_preparo: dishToEdit.tempo_preparo || 30,
        rendimento: dishToEdit.rendimento || '2 porções',
        categoria: dishToEdit.categoria || 'Carnes',
        preco: dishToEdit.preco || '0.00',
        publicado: dishToEdit.publicado || false,
    });
    
    // Estado para o preview da imagem
    const [imagePreview, setImagePreview] = useState(dishToEdit.foto || null);

    // Função para atualizar o estado do formulário
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    // Função para lidar com a mudança de arquivo de imagem
    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            // Cria uma URL temporária para o preview da imagem
            setImagePreview(URL.createObjectURL(file));
            // Aqui você também guardaria o arquivo para enviar no form data
            // setFormData(prev => ({...prev, foto_prato: file}));
        }
    };

    // Função para lidar com o envio do formulário
    const handleSubmit = (e) => {
        e.preventDefault();
        // Futuramente, aqui você chamaria a API para salvar os dados
        console.log('Dados para salvar:', formData);
        onSave(formData); // Chama a função onSave passada como prop
    };

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <header className="modal-header">
                    <h2>Editar Prato: {dishToEdit.nome}</h2>
                    <button onClick={onClose} className="modal-close-btn" title="Fechar">
                        <CloseIcon />
                    </button>
                </header>
                <form onSubmit={handleSubmit} className="modal-form">
                    <div className="form-group">
                        <label htmlFor="nome_prato">Nome do Prato</label>
                        <input type="text" id="nome_prato" name="nome_prato" value={formData.nome_prato} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="categoria">Categoria</label>
                        <input type="text" id="categoria" name="categoria" value={formData.categoria} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="preco">Preço (R$)</label>
                        <input type="number" step="0.01" id="preco" name="preco" value={formData.preco} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="tempo_preparo">Tempo de Preparo (minutos)</label>
                        <input type="number" id="tempo_preparo" name="tempo_preparo" value={formData.tempo_preparo} onChange={handleChange} required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="rendimento">Rendimento</label>
                        <input type="text" id="rendimento" name="rendimento" value={formData.rendimento} onChange={handleChange} required />
                    </div>
                    
                    <div className="form-group">
                        <label htmlFor="ingredientes">Ingredientes</label>
                        <textarea id="ingredientes" name="ingredientes" value={formData.ingredientes} onChange={handleChange} rows="4"></textarea>
                    </div>

                    <div className="form-group">
                        <label htmlFor="modo_preparo">Modo de Preparo</label>
                        <textarea id="modo_preparo" name="modo_preparo" value={formData.modo_preparo} onChange={handleChange} rows="6"></textarea>
                    </div>

                    <div className="form-group-image">
                        <label>Foto do Prato</label>
                        <div className="image-upload-container">
                            <img src={imagePreview || 'https://placehold.co/150x150/2a2a2a/ffffff?text=Sem+Foto'} alt="Preview do prato" className="image-preview" />
                            <input type="file" id="foto_prato" name="foto_prato" onChange={handleImageChange} accept="image/*" />
                            <label htmlFor="foto_prato" className="btn-upload">Trocar Imagem</label>
                        </div>
                    </div>

                    <div className="form-group-checkbox">
                        <input type="checkbox" id="publicado" name="publicado" checked={formData.publicado} onChange={handleChange} />
                        <label htmlFor="publicado">Marcar como publicado</label>
                    </div>
                    
                    <footer className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
                        <button type="submit" className="btn btn-primary">Salvar Alterações</button>
                    </footer>
                </form>
            </div>
        </div>
    );
}
