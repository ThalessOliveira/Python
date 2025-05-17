class Produto:
    def __init__(self, descricao, precoCusto, precoVenda):
        self.descricao=descricao
        self.precoCusto=precoCusto
        self.__precoVenda=precoVenda #variavel private
        if(precoCusto > precoVenda):
            self.__precoVenda=precoCusto
        else:
            self.__precoVenda=precoVenda

    #GET
    @property #pegando o preço de venda que é private (não pode ser alterado nem visivel)
    def precoVenda(self):
        return(self.__precoVenda) #faz com que ela seja visivel
    
    #SET
    @precoVenda.setter #seta a variável que era private (não podia ser alterado) para outro valor
    def precoVenda(self, valor):
        if(valor>=self.precoCusto): #se o valor for menor que o preco de custo vai exibir erro
            self.__precoVenda=valor
            print(f'Preço de venda alterado para R${valor}')                  #basicamente get e set
        else:
            print('O preço de venda não pode ser alterado.')


#encapsulamento -> variavel privada(__precoVenda), que para modificar precisa de um set, para alterar a variável