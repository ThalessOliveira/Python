from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Prato
from django.http import JsonResponse, Http404
from django.core.paginator import Paginator
from .serializers import PratoSerializer
from rest_framework.generics import ListAPIView
from rest_framework import filters
from rest_framework.pagination import PageNumberPagination
    
class ListaPratosAPIView(ListAPIView):
    serializer_class = PratoSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['nome_prato']
    pagination_class = PageNumberPagination

    def get_queryset(self):
        """
        Retorna apenas os pratos publicados, ordenados por data.
        """
        return Prato.objects.filter(publicado=True).order_by('-date_prato')

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