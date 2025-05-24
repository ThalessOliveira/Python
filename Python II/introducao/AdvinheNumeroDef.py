"""
    Comentando em blocos
    Este é um comentário em blocos
    Esta é outra linha do comentário em blocos
"""



from os import system
import random 

def gg(): #função para chamar o app advinhe o número
    system('cls') 

    print("**************************")
    print(' Advinhe qual é o "número"!? ')
    print("**************************")


    numero_secreto = random.randrange(0, 101)

    total_de_tentativas = 10

    for rodada in range(1, total_de_tentativas +1):
        print(f"Tentativa {rodada:02d} de {total_de_tentativas:02d}")

        tentativa = input("Digite um número de 1 a 100: ") 
        print("Você digitou ",tentativa)
        tentativa_int = int(tentativa)

        if(tentativa_int < 1 or tentativa_int > 100):
            print("Tentativa inválida!!! Digite números de 1 a 100!!!")
            continue

        acerto = tentativa_int == numero_secreto 
        ehmaior = tentativa_int > numero_secreto
        ehmenor = tentativa_int < numero_secreto 

        if(acerto):
            print("Boa Tentativa, VOCÊ ACERTOU!!!")
            break 
        else:
            print("Não foi dessa vez. ERROU!!!")

            if(ehmaior):
                print("Sua tentativa foi MAIOR que o número secreto!") 
            if(ehmenor):
                print("Sua tentativa foi MENOR que o número secreto!")

    print(f"O número secreto sorteado foi {numero_secreto}")
    input('\nObrigado por participar!\n')

if(__name__ == "__main__"): #se o arquivo que estiver executando for o arquivo principal
    gg() #entao ele vai chamar a função gg()
#se o arquivo que estiver executando for diferente de "ex4-AdvinheNumeroDef.py", então ele não executa