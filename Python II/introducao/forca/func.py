#aqui vão estar as funções do jogo
import random
from os import path #biblioteca para lidar com caminhos de diretório

def imprime_mensagem_abertura():
    print("**************************")
    print('------Jogo da Forca------ ')
    print("**************************")

def definir_tema():
    dica = int(input("""
        Digite a opção para o tema:
        1 - Carros
        2 - Cidades do Brasil
        3 - Paises
        4 - Nome de pessoas
        5 - Frutas
        """))
    dicas = ('carro', 'cidade', 'país', 'nome', 'fruta')
    return dicas[dica-1]

def carrega_palavra_secreta(tema):
    dirName = path.dirname(path.abspath(__file__)) #pega todo o caminho absoluto do arquivo (dirname remove o nome do arquivo)
    arquivo = open(f"{dirName}\\{tema}.txt","r") #pega o arquivo e abre como leitura
    palavras = []
    for linha in arquivo: #para cada linha do arquivo
        linha = linha.strip() #remove os espaços de cada linha (strip = trim)
        palavras.append(linha) #pega linha e passa na lista palavras
    arquivo.close
    numero = random.randrange(0, len(palavras)+1) #randomiza uma palavra da lista palavras[] como um número
    palavra_secreta = palavras[numero].upper() #atribui uma palavra secreta(palavras[numero]) pega o índice da palavra randomizada
    return palavra_secreta

def init_letras_acertadas(palavra_secreta):
    return["_" for letra in palavra_secreta] #para cada letra na palavra secreta atribui um _ (underline)
    #"for ternário"