from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Prato
from django.http import JsonResponse, Http404

class ViewTesteAPI(APIView):
    """
    Uma view de teste para a API que retorna uma mensagem.
    """
    def get(self, request, *args, **kwargs):
        data = {
            'mensagem': 'Olá! A comunicação com o Django foi um sucesso!',
            'estado': 'Estado: OK'
        }
        return Response(data)
    
def lista_pratos(request):
    """
    Esta view busca todos os pratos PUBLICADOS do banco de dados
    e os retorna como uma resposta JSON.
    """
    # MUDANÇA AQUI: de .all() para .filter(publicado=True)
    pratos = Prato.objects.filter(publicado=True)
    data = []

    for prato in pratos:
        prato_data = {
            'id': prato.id,
            'nome_prato': prato.nome_prato,
            'preco': prato.preco,
            'foto_prato_url': None,
            'funcionario': None
        }
        
        if prato.foto_prato:
            prato_data['foto_prato_url'] = request.build_absolute_uri(prato.foto_prato.url)
        
        if prato.funcionario:
            prato_data['funcionario'] = {
                'id': prato.funcionario.id,
                'nome': prato.funcionario.nome,
                'sobrenome': prato.funcionario.sobrenome,
                'nome_completo': f'{prato.funcionario.nome} {prato.funcionario.sobrenome}'
            }
            
        data.append(prato_data)
    
    return JsonResponse(data, safe=False)

def detalhe_prato(request, prato_id):
    """
    Esta view busca um prato específico e PUBLICADO pelo seu ID
    e retorna seus dados em JSON.
    """
    try:
        # MUDANÇA AQUI: Adicionamos o filtro publicado=True também
        prato = Prato.objects.get(pk=prato_id, publicado=True)
        
        # Monta um dicionário com os dados do prato
        data = {
            'id': prato.id,
            'nome_prato': prato.nome_prato,
            'ingredientes': prato.ingredientes,
            'modo_preparo': prato.modo_preparo,
            'tempo_preparo': prato.tempo_preparo,
            'rendimento': prato.rendimento,
            'categoria': prato.categoria,
            'date_prato': prato.date_prato.strftime('%d/%m/%Y'),
            'preco': prato.preco,
            'foto_prato_url': None, # Iniciar como None
        }

        # Melhoria: Montar a URL absoluta também para a view de detalhe
        if prato.foto_prato:
            data['foto_prato_url'] = request.build_absolute_uri(prato.foto_prato.url)
        
        return JsonResponse(data)

    except Prato.DoesNotExist:
        # A exceção agora será lançada se o prato não existir OU não estiver publicado
        raise Http404("Prato não encontrado")