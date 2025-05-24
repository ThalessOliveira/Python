#tupla = array
#tupla multidimensional = matriz

from os import system, name
import random

def gg():
    opcao = 's'
    while opcao.upper()=='S': #upper converte para maiúsculo
        system('cls') if(name == 'nt')else system('clear') #cls se o system for Windows(nt) senao clear

        computador = random.randint(0,2)#randomiza 3 numeros (randint randomiza sem reduzir 1)
        jogador = int(input('''Escolha uma opção para se jogar
        [1] Pedra
        [2] Papel
        [3] Tesoura
        Digite sua escolha: '''))-1 
        pecas = ("Pedra", "Papel", "Tesoura")
            # Tupla multi-dimensional
        mJogador = "Você GANHOU. Hoje está com sorte!"
        mCPU = "Ez"
        mEmpate = "Nem tenta paizão"
        tabela = (
            (mEmpate, mJogador, mCPU),
            (mCPU, mEmpate, mJogador),
            (mJogador, mCPU, mEmpate)
        )

        print(f'Voçê escolheu {pecas[jogador]}')
        print(f'A CPU escolheu {pecas[computador]}')
        print(f'{tabela[computador][jogador]} Ganhou!!!')
        opcao = input('Jogar novamente? aperte S(sim) para jogar novamente. ')

if(__name__ == "__main__"):
    gg()