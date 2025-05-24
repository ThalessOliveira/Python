class Produto: #objeto
    def __init__(self, descricao, preco):
        self.descricao=descricao
        self.preco=preco

    def verProduto(self): #ver produto é o método para visualizar o produto 
        print(f'{self.descricao} por apenas R${self.preco:.2f}')

