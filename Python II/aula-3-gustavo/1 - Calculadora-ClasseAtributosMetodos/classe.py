#método === função

class calculadora: #classe calculadora
        def __init__(self, valor1, valor2): #__init__ = método construtor // no c# tem o mesmo nome da classe
                self.valor1=valor1
                self.valor2=valor2
        #self se referencia ao própio objeto/classe (this === self) ***necessario passar no metodo construtor***
        def soma(self):
            return self.valor1 + self.valor2
        def sub(self):                              #suas funções
            return self.valor1 - self.valor2
        def mult(self):
            return self.valor1 * self.valor2
        def div(self):
            return self.valor1 / self.valor2
        
#aqui temos:
#classe
#construtor
#métodos
#objetos
#atributos -> valor1 e valor2

