import forca.desenhos as desenhos
from forca.func import imprime_mensagem_abertura, definir_tema, carrega_palavra_secreta, init_letras_acertadas

def gg():
    # print(desenhos.forca(1))
    # print(desenhos.forca(2))
    # print(desenhos.forca(3))
    # print(desenhos.forca(4))
    # print(desenhos.forca(5))
    # print(desenhos.forca(6))
    # print(desenhos.forca(7))
    # print(desenhos.vencedor())
    # print(desenhos.perdedor('PythonII')) //testando se os desenhos estão sendo printados
    imprime_mensagem_abertura()
    dica = definir_tema() #dica vai atribuir o tema
    palavra_secreta = carrega_palavra_secreta(dica) #palavra secreta é randomizada de acordo com o tema

    letras_acertadas = init_letras_acertadas(palavra_secreta) #armazena a quantidade de letras da palavra secreta
    print(f"Dica: {dica.upper()}") #printa a dica
    print(f"Palavra secreta contem: {len(letras_acertadas)} letras") #Mostra a quantidade de letras/ len() mostra o tamanho
    print(letras_acertadas) #printa letras acertadas
    morreu = False
    acertou = False
    tentativas_erradas = []
    erros = 0

    while(not morreu and not acertou): #enquanto não morreu ou não acertou
        tentativa = input("Qual a letra?") 
        tentativa = tentativa.strip().upper() #tentativa recebe a letra sem espaços e maiúscula

        if(tentativa in palavra_secreta): #se a tentativa (letra) estiver em palavra_secreta
            index = 0 #index = 0
            for letra in palavra_secreta: #para letra estiver em palavra_secreta
                if(tentativa == letra): #se tentativa for igual letra
                    letras_acertadas[index] = letra #letras acertadas recebe o indice = letra
                index += 1 #indice = 1 + 1
        else: #senao
            erros += 1
            desenhos.forca(erros) #exibe o desenho de acordo com a quantidade de erros
            tentativas_erradas.append(tentativa) 
        morreu = erros == 7
        acertou = '_' not in letras_acertadas
        print(f"Dica: {dica.upper()}")
        print(f"Erros: {tentativas_erradas}")
        print(letras_acertadas)

    if(acertou):
        desenhos.vencedor()
    else:
        desenhos.perdedor(palavra_secreta)

    print('\nObrigado por participar!\n')

if(__name__ == "__main__"):
    gg()