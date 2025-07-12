-- Arquivo SQL para popular a tabela churras_prato com dados iniciais.
-- Cada comando INSERT adiciona um novo prato ao cardápio.

-- Cortes Nobres
INSERT INTO "churras_prato" (nome_prato, ingredientes, modo_preparo, tempo_preparo, rendimento, categoria, date_prato, preco, foto_prato, publicado) VALUES
('Picanha na Brasa', 'Picanha selecionada, Sal Grosso', 'Assar na brasa em fogo forte, fatiar contra a fibra.', 25, '2 porções', 'Corte Nobre', CURRENT_TIMESTAMP, 95.50, NULL, 1),
('Fraldinha na Manteiga de Ervas', 'Fraldinha, Manteiga, Alho, Ervas Finas', 'Selar a carne e finalizar com manteiga de ervas.', 30, '2 porções', 'Corte Nobre', CURRENT_TIMESTAMP, 78.00, NULL, 1),
('Bife de Chorizo Argentino', 'Bife de Chorizo, Sal, Pimenta do Reino', 'Grelhar em fogo alto até o ponto desejado.', 20, '1 porção', 'Corte Nobre', CURRENT_TIMESTAMP, 89.90, NULL, 1),
('Costela Bovina Assada Lentamente', 'Costela Bovina, Sal Grosso, Celofane', 'Assar por 4 horas em fogo baixo, embrulhada em celofane.', 240, '3 porções', 'Corte Tradicional', CURRENT_TIMESTAMP, 120.00, NULL, 1),
('Maminha na Brasa', 'Peça de Maminha, Sal Grosso', 'Assar a peça inteira em fogo médio.', 40, '3 porções', 'Corte Nobre', CURRENT_TIMESTAMP, 75.00, NULL, 1);

-- Outras Carnes e Frango
INSERT INTO "churras_prato" (nome_prato, ingredientes, modo_preparo, tempo_preparo, rendimento, categoria, date_prato, preco, foto_prato, publicado) VALUES
('Linguiça Toscana Artesanal', 'Linguiça toscana de pernil', 'Assar na churrasqueira até dourar por completo.', 20, '1 porção', 'Tradicional', CURRENT_TIMESTAMP, 25.00, NULL, 1),
('Coração de Frango no Espeto', 'Coração de frango, Sal, Alho', 'Temperar e assar no espeto até ficarem macios.', 15, '1 porção', 'Frango', CURRENT_TIMESTAMP, 22.50, NULL, 1),
('Asa de Frango (Tulipa) com Limão', 'Meio da asa de frango, Limão, Sal', 'Marinar no limão e assar até a pele ficar crocante.', 30, '1 porção', 'Frango', CURRENT_TIMESTAMP, 28.00, NULL, 1),
('Kafta de Cordeiro', 'Carne de cordeiro moída, Hortelã, Cebola', 'Moldar no espeto e grelhar na churrasqueira.', 20, '2 unidades', 'Especial', CURRENT_TIMESTAMP, 45.00, NULL, 1);

-- Acompanhamentos
INSERT INTO "churras_prato" (nome_prato, ingredientes, modo_preparo, tempo_preparo, rendimento, categoria, date_prato, preco, foto_prato, publicado) VALUES
('Arroz Branco Soltinho', 'Arroz, Alho, Óleo, Sal', 'Refogar o alho, adicionar o arroz e cozinhar.', 20, '1 porção', 'Acompanhamento', CURRENT_TIMESTAMP, 12.00, NULL, 1),
('Farofa da Casa com Bacon', 'Farinha de mandioca, Bacon, Cebola, Cheiro-verde', 'Fritar o bacon, refogar a cebola e misturar com a farinha.', 15, '1 porção', 'Acompanhamento', CURRENT_TIMESTAMP, 18.50, NULL, 1),
('Vinagrete Clássico', 'Tomate, Cebola, Pimentão, Vinagre, Azeite', 'Picar todos os ingredientes e temperar.', 10, '1 porção', 'Acompanhamento', CURRENT_TIMESTAMP, 15.00, NULL, 1),
('Pão de Alho Cremoso', 'Pão francês, Alho, Maionese, Queijo', 'Misturar o creme, rechear o pão e assar na brasa.', 15, '1 unidade', 'Acompanhamento', CURRENT_TIMESTAMP, 14.00, NULL, 1),
('Mandioca Cozida na Manteiga de Garrafa', 'Mandioca, Manteiga de Garrafa, Sal', 'Cozinhar a mandioca até ficar macia e regar com manteiga.', 30, '1 porção', 'Acompanhamento', CURRENT_TIMESTAMP, 19.00, NULL, 1),
('Queijo Coalho Grelhado com Melado', 'Queijo Coalho em espeto, Melado de Cana', 'Grelhar o queijo na brasa e regar com melado.', 10, '1 espeto', 'Acompanhamento', CURRENT_TIMESTAMP, 17.00, NULL, 1);

-- Saladas
INSERT INTO "churras_prato" (nome_prato, ingredientes, modo_preparo, tempo_preparo, rendimento, categoria, date_prato, preco, foto_prato, publicado) VALUES
('Salada de Maionese de Batata', 'Batata, Cenoura, Maionese, Ovos, Azeitona', 'Cozinhar os legumes, misturar com a maionese e decorar.', 40, '1 porção', 'Salada', CURRENT_TIMESTAMP, 21.00, NULL, 1),
('Salada Verde com Palmito', 'Alface, Rúcula, Tomate Cereja, Palmito', 'Montar as folhas, adicionar o palmito e os tomates.', 10, '1 porção', 'Salada', CURRENT_TIMESTAMP, 25.00, NULL, 1),
('Salpicão de Frango Defumado', 'Frango desfiado, Cenoura, Milho, Batata Palha', 'Misturar todos os ingredientes com maionese.', 20, '1 porção', 'Salada', CURRENT_TIMESTAMP, 29.50, NULL, 1);

-- Sobremesas
INSERT INTO "churras_prato" (nome_prato, ingredientes, modo_preparo, tempo_preparo, rendimento, categoria, date_prato, preco, foto_prato, publicado) VALUES
('Pudim de Leite Condensado', 'Leite condensado, Leite, Ovos, Caramelo', 'Assar em banho-maria e gelar.', 90, '1 fatia', 'Sobremesa', CURRENT_TIMESTAMP, 16.00, NULL, 1),
('Abacaxi Grelhado com Canela', 'Fatias de abacaxi, Açúcar, Canela em pó', 'Passar as fatias no açúcar com canela e grelhar na brasa.', 15, '1 fatia', 'Sobremesa', CURRENT_TIMESTAMP, 14.50, NULL, 1);

-- --- MAIS CORTES NOBRES E ESPECIAIS ---
INSERT INTO "churras_prato" (nome_prato, ingredientes, modo_preparo, tempo_preparo, rendimento, categoria, date_prato, preco, foto_prato, publicado) VALUES
('Tomahawk Steak', 'Tomahawk de Angus, Sal de Parrilla, Pimenta Preta', 'Selar em fogo muito forte e finalizar em fogo indireto.', 45, '2 porções', 'Corte Nobre', CURRENT_TIMESTAMP, 189.90, NULL, 1),
('Bife Ancho Premium', 'Bife Ancho, Sal de Parrilla', 'Grelhar em brasa forte por 7 minutos de cada lado para ponto mal passado.', 15, '1 porção', 'Corte Nobre', CURRENT_TIMESTAMP, 92.00, NULL, 1),
('T-Bone de Novilho', 'T-Bone, Sal, Manteiga de Alho', 'Grelhar o T-Bone, pincelando com manteiga de alho nos minutos finais.', 25, '2 porções', 'Corte Nobre', CURRENT_TIMESTAMP, 155.00, NULL, 1),
('Medalhão de Filé Mignon com Bacon', 'Filé Mignon, Fatias de Bacon, Sal', 'Enrolar os medalhões no bacon, prender com palito e grelhar.', 20, '2 unidades', 'Corte Nobre', CURRENT_TIMESTAMP, 85.00, NULL, 1),
('Cupim na Manteiga de Garrafa', 'Cupim, Manteiga de Garrafa, Sal Grosso', 'Cozinhar na pressão e finalizar na churrasqueira regando com manteiga.', 180, '2 porções', 'Corte Tradicional', CURRENT_TIMESTAMP, 88.00, NULL, 1),
('Shoulder Steak (Raquete)', 'Shoulder Steak, Sal, Chimichurri', 'Grelhar em fogo alto e fatiar finamente contra a fibra.', 15, '1 porção', 'Corte Nobre', CURRENT_TIMESTAMP, 79.50, NULL, 1);

-- --- CORTES DE CORDEIRO E SUÍNO ---
INSERT INTO "churras_prato" (nome_prato, ingredientes, modo_preparo, tempo_preparo, rendimento, categoria, date_prato, preco, foto_prato, publicado) VALUES
('Carré de Cordeiro Francês', 'Carré de Cordeiro, Hortelã, Alho, Vinho Branco', 'Marinar e grelhar rapidamente para manter a suculência.', 20, '1 porção', 'Cordeiro', CURRENT_TIMESTAMP, 110.00, NULL, 1),
('Costelinha de Porco ao Molho Barbecue', 'Costela de porco, Molho barbecue caseiro', 'Assar lentamente e pincelar com molho barbecue no final.', 150, '2 porções', 'Suíno', CURRENT_TIMESTAMP, 76.00, NULL, 1),
('Lombo de Porco com Ervas Finas', 'Lombo suíno, Alecrim, Tomilho, Sálvia', 'Marinar com ervas e assar na grelha em fogo médio.', 35, '2 porções', 'Suíno', CURRENT_TIMESTAMP, 68.00, NULL, 1),
('Pancetta Crocante (Barriga de Porco)', 'Barriga de porco, Sal, Limão', 'Assar lentamente até a pele pururucar.', 120, '1 porção', 'Suíno', CURRENT_TIMESTAMP, 55.00, NULL, 1),
('Paleta de Cordeiro Desossada', 'Paleta de cordeiro, Alho, Alecrim', 'Assar lentamente no bafo da churrasqueira.', 200, '3 porções', 'Cordeiro', CURRENT_TIMESTAMP, 145.00, NULL, 1);

-- --- MAIS FRANGO E LINGUIÇAS ---
INSERT INTO "churras_prato" (nome_prato, ingredientes, modo_preparo, tempo_preparo, rendimento, categoria, date_prato, preco, foto_prato, publicado) VALUES
('Coxa de Frango Desossada na Mostarda', 'Coxa de frango desossada, Mostarda Dijon, Mel', 'Marinar na mostarda e mel e grelhar até dourar.', 25, '1 porção', 'Frango', CURRENT_TIMESTAMP, 32.00, NULL, 1),
('Espeto de Frango com Bacon', 'Peito de frango em cubos, Bacon em fatias', 'Intercalar frango e bacon no espeto e assar.', 20, '1 espeto', 'Frango', CURRENT_TIMESTAMP, 30.00, NULL, 1),
('Linguiça de Cordeiro com Hortelã', 'Linguiça artesanal de cordeiro', 'Grelhar em fogo médio até o interior estar cozido.', 20, '1 porção', 'Especial', CURRENT_TIMESTAMP, 38.00, NULL, 1),
('Linguiça Cuiabana com Queijo', 'Linguiça de carne bovina, Leite, Queijo', 'Assar lentamente na grelha, virando sempre.', 25, '1 porção', 'Tradicional', CURRENT_TIMESTAMP, 35.00, NULL, 1);

-- --- OUTRAS OPÇÕES DE CARNE E ESPECIAIS ---
INSERT INTO "churras_prato" (nome_prato, ingredientes, modo_preparo, tempo_preparo, rendimento, categoria, date_prato, preco, foto_prato, publicado) VALUES
('Bife de Vazio Uruguaio', 'Bife de Vazio (Fraldão), Sal de Parrilla', 'Grelhar em fogo forte, servido ao ponto.', 20, '1 porção', 'Corte Tradicional', CURRENT_TIMESTAMP, 72.00, NULL, 1),
('Matambre Recheado à Gaúcha', 'Matambre, Cenoura, Pimentão, Linguiça', 'Rechear, enrolar, amarrar e assar lentamente.', 180, '2 porções', 'Corte Tradicional', CURRENT_TIMESTAMP, 95.00, NULL, 1),
('Espeto de Alcatra com Cebola e Pimentão', 'Alcatra em cubos, Cebola, Pimentão', 'Montar os espetos e grelhar, virando para assar por igual.', 25, '1 espeto', 'Corte Nobre', CURRENT_TIMESTAMP, 42.00, NULL, 1),
('Tábua do Churrasqueiro', 'Picanha, Linguiça, Drumet de Frango, Pão de Alho', 'Seleção de nossos melhores itens, servidos em uma tábua.', 40, '2 a 3 porções', 'Especial', CURRENT_TIMESTAMP, 150.00, NULL, 1);

-- --- MAIS ACOMPANHAMENTOS E SOBREMESAS ---
INSERT INTO "churras_prato" (nome_prato, ingredientes, modo_preparo, tempo_preparo, rendimento, categoria, date_prato, preco, foto_prato, publicado) VALUES
('Polenta Grelhada com Parmesão', 'Polenta cremosa, Queijo parmesão ralado', 'Deixar a polenta firmar, cortar e grelhar na brasa.', 20, '1 porção', 'Acompanhamento', CURRENT_TIMESTAMP, 22.00, NULL, 1),
('Batata Doce Assada com Alecrim', 'Batata doce, Alecrim fresco, Azeite', 'Cortar em rodelas grossas e assar na brasa até ficarem macias.', 30, '1 porção', 'Acompanhamento', CURRENT_TIMESTAMP, 18.00, NULL, 1),
('Cebola na Brasa com Orégano', 'Cebola inteira, Azeite, Sal, Orégano', 'Assar a cebola inteira na brasa até caramelizar.', 40, '1 unidade', 'Acompanhamento', CURRENT_TIMESTAMP, 13.50, NULL, 1),
('Provolone Grelhado com Tomate Seco', 'Fatia grossa de provolone, Tomate seco, Orégano', 'Grelhar o queijo em uma frigideira de ferro na brasa.', 10, '1 porção', 'Acompanhamento', CURRENT_TIMESTAMP, 28.00, NULL, 1),
('Salada de Lentilha com Defumados', 'Lentilha, Paio, Bacon, Cheiro-verde', 'Cozinhar a lentilha e misturar com os defumados fritos.', 30, '1 porção', 'Salada', CURRENT_TIMESTAMP, 26.50, NULL, 1),
('Arroz Biro-Biro', 'Arroz, Ovo, Bacon, Batata Palha, Salsa', 'Arroz misturado com ovos mexidos, bacon frito e batata palha.', 20, '1 porção', 'Acompanhamento', CURRENT_TIMESTAMP, 24.00, NULL, 1),
('Banana na Brasa com Doce de Leite', 'Banana prata, Doce de leite, Canela', 'Assar a banana com casca na brasa e servir com doce de leite.', 15, '1 unidade', 'Sobremesa', CURRENT_TIMESTAMP, 15.50, NULL, 1),
('Laranja Grelhada para Carnes', 'Laranja, Açúcar', 'Cortar a laranja ao meio, polvilhar açúcar e grelhar.', 10, '1/2 laranja', 'Acompanhamento', CURRENT_TIMESTAMP, 9.00, NULL, 1),
('Pimentão Recheado com Carne Seca', 'Pimentão colorido, Carne seca desfiada, Catupiry', 'Rechear os pimentões e assar na parte alta da churrasqueira.', 30, '1 unidade', 'Especial', CURRENT_TIMESTAMP, 27.00, NULL, 1),
('Mousse de Chocolate Amargo', 'Chocolate 70%, Creme de leite, Ovos', 'Mousse aerada e intensa, perfeita para finalizar.', 20, '1 porção', 'Sobremesa', CURRENT_TIMESTAMP, 19.50, NULL, 1);