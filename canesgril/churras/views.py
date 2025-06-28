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
    Esta view busca todos os pratos do banco de dados
    e os retorna como uma resposta JSON, incluindo a URL completa da imagem.
    """
    pratos = Prato.objects.all()
    data = []

    for prato in pratos:
        # Para cada prato, construímos um dicionário manualmente
        prato_data = {
            'id': prato.id,
            'nome_prato': prato.nome_prato,
            'preco': prato.preco,
            # Adicione outros campos que a lista possa precisar aqui
            'foto_prato_url': None  # Valor padrão caso não haja foto
        }
        
        # Verificamos se o campo foto_prato tem um arquivo associado
        if prato.foto_prato:
            # .url gera a URL completa (ex: /media/fotos_pratos/nome_da_foto.jpg)
            prato_data['foto_prato_url'] = prato.foto_prato.url
        
        data.append(prato_data)
    
    return JsonResponse(data, safe=False)

def detalhe_prato(request, prato_id):
    """
    Esta view busca um prato específico pelo seu ID
    e retorna seus dados em JSON, incluindo a URL da foto.
    """
    try:
        prato = Prato.objects.get(pk=prato_id)
        
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
            # --- MUDANÇA PRINCIPAL AQUI ---
            # Adiciona a URL da foto, se ela existir
            'foto_prato_url': prato.foto_prato.url if prato.foto_prato else None
        }
        
        return JsonResponse(data)

    except Prato.DoesNotExist:
        raise Http404("Prato não encontrado")