from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response

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