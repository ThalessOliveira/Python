import React, { useState } from 'react';
import './styles/EditDishModal.css';

const CloseIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);

export default function AddDishModal({ isOpen, onClose, onSave }) {
    if (!isOpen) {
        return null;
    }

    const [formData, setFormData] = useState({
        nome_prato: '',
        ingredientes: '',
        modo_preparo: '',
        tempo_preparo: 0,
        rendimento: '',
        categoria: '',
        preco: '0.00',
        publicado: false,
        foto_prato: null, 
    });
    
    const [imagePreview, setImagePreview] = useState(null);

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0];
            setFormData(prev => ({...prev, foto_prato: file}));
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const dataToSend = new FormData();
        
        for (const key in formData) {
            if (key === 'publicado') {
                if (formData.publicado) {
                    dataToSend.append(key, 'on');
                }
            } else if (formData[key] !== null) {
                dataToSend.append(key, formData[key]);
            }
        }
        
        onSave(dataToSend);
    };

    return (
        <div className="modal-backdrop" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <header className="modal-header">
                    <h2>Adicionar Novo Prato</h2>
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
                            <input type="file" id="foto_prato_add" name="foto_prato" onChange={handleImageChange} accept="image/*" />
                            <label htmlFor="foto_prato_add" className="btn-upload">Escolher Imagem</label>
                        </div>
                    </div>

                    <div className="form-group-checkbox">
                        <input type="checkbox" id="publicado_add" name="publicado" checked={formData.publicado} onChange={handleChange} />
                        <label htmlFor="publicado_add">Marcar como publicado</label>
                    </div>
                    
                    <footer className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={onClose}>Cancelar</button>
                        <button type="submit" className="btn btn-primary">Criar Prato</button>
                    </footer>
                </form>
            </div>
        </div>
    );
}
