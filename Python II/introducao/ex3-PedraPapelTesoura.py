#tupla = array
#tupla multidimensional = matriz

from os import system, name
import random

opcao = 's'
while opcao.upper()=='S': #upper converte para maiúsculo
    system('cls') if(name == 'nt')else system('clear') #cls se o system for Windows(nt) senao clear (if ternário do python)

    computador = random.randint(0,2)#randomiza 3 numeros (randint randomiza sem reduzir 1)
    jogador = int(input('''escolha uma opção para se jogar:
    [1] Pedra
    [2] Papel
    [3] Tesoura
    Digite sua escolha: '''))-1
    pecas = ("Pedra", "Papel", "Tesoura") 

    #python não tem vetor
    #tupla para estático e lista para dinâmico (vetores do python)

    #abaixo uma tupla multidimensional

    tabela = ( #essa matriz é o que faz o jogo funcionar
        ('NINGUEM', 'JOGADOR', 'CPU'), #maquina = indice 0, jogador = indice 1 = 'jogador ganha'
        ('CPU,', 'NINGUEM', 'JOGADOR'),
        ('JOGADOR', 'CPU', 'NINGUEM')
    ) #matriz do python

print(f'Você escolheu {pecas[jogador]}')
print(f'CPU escolheu {pecas[computador]}')
print(f'{tabela[computador][jogador]} GANHOUU!!!')