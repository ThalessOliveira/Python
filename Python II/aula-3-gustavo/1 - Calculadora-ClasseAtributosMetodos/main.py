from classe import calculadora #importando a calculadora de classe

valor1 = int(input('informe o valor 1: ')) #o input digitado pelo usuário vem como inteiro (int)
valor2 = int(input('informe o valor 2: '))

calc = calculadora(valor1, valor2) #atribuimos a variavel calc, a classe calculadora que tem os métodos que executam os calculos
#variavel como função

#abaixo é exibido os calculos que na classe, seus métodos fazem
print('Soma: ')
print(calc.soma())
print('---')
print('Subtração: ')
print(calc.sub())
print('---')
print('Multiplicação')
print(calc.mult())
print('Divisão')
print('---')
print(calc.div())