from classe import Produto #importando a classe produto
notebook = Produto('Notebook Dell i7', 5800.90) #(instanciando o objeto)atribuindo a notebook (descricao e valor)
celular = Produto('Iphone 16 pro max', 14999.99)
input('Pressione qualquer tecla para ver as ofertas')
notebook.verProduto() #chamamos o notebook com o método ver produto para visualizar o que atribuimos ao notebook
celular.verProduto()

desc = (input("informe o nome: "))
preco = float(input("informe o preco: "))

produsuario = Produto(desc, preco)

produsuario.verProduto()
print() #aqui vemos a resposta de tudo isso
