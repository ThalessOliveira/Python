#str -> faz a verificação se é uma string

cor = str(input("Que cor está o sinal??? "))

if cor == 'vermelho':
    print("PARE !!!")

elif cor == 'amarelo':
    print("DEVAGAR")

elif cor == 'verde':
    print("PODE IR!!!")
else:
    print("Resposta inválida!!!")