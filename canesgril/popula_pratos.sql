-- Arquivo SQL para popular a tabela churras_prato com dados iniciais.
-- Cada comando INSERT adiciona um novo prato ao cardápio.

-- Cortes Nobres
INSERT INTO "churras_prato" (nome_prato, ingredientes, modo_preparo, tempo_preparo, rendimento, categoria, date_prato, preco, foto_prato) VALUES
('Picanha na Brasa', 'Picanha selecionada, Sal Grosso', 'Assar na brasa em fogo forte, fatiar contra a fibra.', 25, '2 porções', 'Corte Nobre', CURRENT_TIMESTAMP, 95.50, NULL),
('Fraldinha na Manteiga de Ervas', 'Fraldinha, Manteiga, Alho, Ervas Finas', 'Selar a carne e finalizar com manteiga de ervas.', 30, '2 porções', 'Corte Nobre', CURRENT_TIMESTAMP, 78.00, NULL),
('Bife de Chorizo Argentino', 'Bife de Chorizo, Sal, Pimenta do Reino', 'Grelhar em fogo alto até o ponto desejado.', 20, '1 porção', 'Corte Nobre', CURRENT_TIMESTAMP, 89.90, NULL),
('Costela Bovina Assada Lentamente', 'Costela Bovina, Sal Grosso, Celofane', 'Assar por 4 horas em fogo baixo, embrulhada em celofane.', 240, '3 porções', 'Corte Tradicional', CURRENT_TIMESTAMP, 120.00, NULL),
('Maminha na Brasa', 'Peça de Maminha, Sal Grosso', 'Assar a peça inteira em fogo médio.', 40, '3 porções', 'Corte Nobre', CURRENT_TIMESTAMP, 75.00, NULL);

-- Outras Carnes e Frango
INSERT INTO "churras_prato" (nome_prato, ingredientes, modo_preparo, tempo_preparo, rendimento, categoria, date_prato, preco, foto_prato) VALUES
('Linguiça Toscana Artesanal', 'Linguiça toscana de pernil', 'Assar na churrasqueira até dourar por completo.', 20, '1 porção', 'Tradicional', CURRENT_TIMESTAMP, 25.00, NULL),
('Coração de Frango no Espeto', 'Coração de frango, Sal, Alho', 'Temperar e assar no espeto até ficarem macios.', 15, '1 porção', 'Frango', CURRENT_TIMESTAMP, 22.50, NULL),
('Asa de Frango (Tulipa) com Limão', 'Meio da asa de frango, Limão, Sal', 'Marinar no limão e assar até a pele ficar crocante.', 30, '1 porção', 'Frango', CURRENT_TIMESTAMP, 28.00, NULL),
('Kafta de Cordeiro', 'Carne de cordeiro moída, Hortelã, Cebola', 'Moldar no espeto e grelhar na churrasqueira.', 20, '2 unidades', 'Especial', CURRENT_TIMESTAMP, 45.00, NULL);

-- Acompanhamentos
INSERT INTO "churras_prato" (nome_prato, ingredientes, modo_preparo, tempo_preparo, rendimento, categoria, date_prato, preco, foto_prato) VALUES
('Arroz Branco Soltinho', 'Arroz, Alho, Óleo, Sal', 'Refogar o alho, adicionar o arroz e cozinhar.', 20, '1 porção', 'Acompanhamento', CURRENT_TIMESTAMP, 12.00, NULL),
('Farofa da Casa com Bacon', 'Farinha de mandioca, Bacon, Cebola, Cheiro-verde', 'Fritar o bacon, refogar a cebola e misturar com a farinha.', 15, '1 porção', 'Acompanhamento', CURRENT_TIMESTAMP, 18.50, NULL),
('Vinagrete Clássico', 'Tomate, Cebola, Pimentão, Vinagre, Azeite', 'Picar todos os ingredientes e temperar.', 10, '1 porção', 'Acompanhamento', CURRENT_TIMESTAMP, 15.00, NULL),
('Pão de Alho Cremoso', 'Pão francês, Alho, Maionese, Queijo', 'Misturar o creme, rechear o pão e assar na brasa.', 15, '1 unidade', 'Acompanhamento', CURRENT_TIMESTAMP, 14.00, NULL),
('Mandioca Cozida na Manteiga de Garrafa', 'Mandioca, Manteiga de Garrafa, Sal', 'Cozinhar a mandioca até ficar macia e regar com manteiga.', 30, '1 porção', 'Acompanhamento', CURRENT_TIMESTAMP, 19.00, NULL),
('Queijo Coalho Grelhado com Melado', 'Queijo Coalho em espeto, Melado de Cana', 'Grelhar o queijo na brasa e regar com melado.', 10, '1 espeto', 'Acompanhamento', CURRENT_TIMESTAMP, 17.00, NULL);

-- Saladas
INSERT INTO "churras_prato" (nome_prato, ingredientes, modo_preparo, tempo_preparo, rendimento, categoria, date_prato, preco, foto_prato) VALUES
('Salada de Maionese de Batata', 'Batata, Cenoura, Maionese, Ovos, Azeitona', 'Cozinhar os legumes, misturar com a maionese e decorar.', 40, '1 porção', 'Salada', CURRENT_TIMESTAMP, 21.00, NULL),
('Salada Verde com Palmito', 'Alface, Rúcula, Tomate Cereja, Palmito', 'Montar as folhas, adicionar o palmito e os tomates.', 10, '1 porção', 'Salada', CURRENT_TIMESTAMP, 25.00, NULL),
('Salpicão de Frango Defumado', 'Frango desfiado, Cenoura, Milho, Batata Palha', 'Misturar todos os ingredientes com maionese.', 20, '1 porção', 'Salada', CURRENT_TIMESTAMP, 29.50, NULL);

-- Sobremesas
INSERT INTO "churras_prato" (nome_prato, ingredientes, modo_preparo, tempo_preparo, rendimento, categoria, date_prato, preco, foto_prato) VALUES
('Pudim de Leite Condensado', 'Leite condensado, Leite, Ovos, Caramelo', 'Assar em banho-maria e gelar.', 90, '1 fatia', 'Sobremesa', CURRENT_TIMESTAMP, 16.00, NULL),
('Abacaxi Grelhado com Canela', 'Fatias de abacaxi, Açúcar, Canela em pó', 'Passar as fatias no açúcar com canela e grelhar na brasa.', 15, '1 fatia', 'Sobremesa', CURRENT_TIMESTAMP, 14.50, NULL);