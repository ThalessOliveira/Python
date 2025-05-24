from django.shortcuts import render

def index(request): #recebe os dados da requisição como parâmetro
    return render(request, 'index.html') #renderiza a página 

def contato(request):
    #contexto (dicionario)
    #esses dados são renderizados dentro do template por {{}}
    context = {
        'nome':'MotorWeb',
        'telefone':'17-3245-2342',
        'email':'motorweb@teste.com',
    }
    #para mandar para o template, é necessário colocar sempre na terceira posição da render
    return render(request, 'contato.html', context)
    