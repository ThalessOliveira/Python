"""
    Comentando em blocos
    Este é um comentário em blocos
    Esta é outra linha do comentário em blocos
"""



from os import system #do módulo OS, importe o system (importando só o que precisa do módulo os)
import random #importando toda a biblioteca random
#importa biblioteca do sistema
system('cls') #limpa a tela (comando do cmd (system))

print("**************************")
print(' Advinhe qual é o "número"!? ')
print("**************************")


numero_secreto = random.randrange(0, 101) #o valor da variável atribui um número randomizado de 0 a 100 (0 a 101 = 0 a 100, sempre um numero a mais)

total_de_tentativas = 10 #atribuimos a variável de tentativas o valor 10

#range -> vai até um a menos do que está definido, exemplo: (0, 10), vai te 9

for rodada in range(1, total_de_tentativas +1): #para rodada em um range de 1 até 10 (total_de_tentativas = 10 + 1)
    print(f"Tentativa {rodada:02d} de {total_de_tentativas:02d}") #f = formatação (concatenação) de string (formatted string literal) / :02d limita a dois dígitos

    tentativa = input("Digite um número de 1 a 100: ") #input espera uma entrada no console
    print("Você digitou ",tentativa) #outro exemplo de concatenação
    tentativa_int = int(tentativa) #converte a variável tentativa para inteiro e armazena em tentativa-int

    if(tentativa_int < 1 or tentativa_int > 100): #se tentativa_int for menor que 1 ou tentativa for maior que 100
        print("Tentativa inválida!!! Digite números de 1 a 100!!!")
        continue #continue serve para continuar mesmo que a entrada tenha sido inválida, vai para o começo do loop

    #atribuindo variáveis boolean
    acerto = tentativa_int == numero_secreto #Valores iguais = acerto = true
    ehmaior = tentativa_int > numero_secreto #Valor maior que num secreto, se for ehmaior = atribui valor
    ehmenor = tentativa_int < numero_secreto #Valor menor que num secreto, se for ehmenor = atribuivalor

    if(acerto): #se acerto
        print("Boa Tentativa, VOCÊ ACERTOU!!!") #Mensagem de acerto
        break #para a execução
    else: #se não
        print("Não foi dessa vez. ERROU!!!")

        if(ehmaior): #se numero maior
            print("Sua tentativa foi MAIOR que o número secreto!") 
        if(ehmenor): #se numero menor
            print("Sua tentativa foi MENRO que o número secreto!")

print(f"O número secreto sorteado foi {numero_secreto}")
input('\nObrigado por participar!\n')