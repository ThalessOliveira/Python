from classe import *

#criando instancias dos itens (instanciando objetos)
teclado = ProdutoFisico("Teclado Mecânico", 150.00, 0.8, "30x15x5 cm")
python_book = LivroDigital("Python Fluente", 80.00, "PDF")
web_course = CursoOnline("Desenvolvimento Web Completo", 400.00, 30)
data_course = CursoOnline("Análise de Dados com Python", 250.00, 15)

#lista contendo as instancias dos itens
itens = [teclado, python_book, web_course, data_course]

for item in itens: #aqui percorremos uma lista com todos os itens
    item.exibir_detalhes()
    preco_final = item.calcular_preco_final() #como herdamos uma classe e modificamos seus métodos, a execução vai ser igual para todos, porém dependendo de quem está em memória, o método a ser executado vai ser diferente, isso é polimorfismo
    print(f"Preço Final: R$ {preco_final:.2f}")
    print("-" * 30)