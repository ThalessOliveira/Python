# churras/serializers.py
from rest_framework import serializers
from .models import Prato
from funcionarios.models import Funcionario

class FuncionarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Funcionario
        fields = ['id', 'nome', 'sobrenome'] # Adicione os campos que desejar

class PratoSerializer(serializers.ModelSerializer):
    # Para mostrar os dados do funcionário em vez de apenas o ID
    funcionario = FuncionarioSerializer(read_only=True)
    # Usa o campo virtual da ImageKit para a thumbnail
    foto_prato_thumb_url = serializers.CharField(source='foto_prato_thumb.url', read_only=True)

    class Meta:
        model = Prato
        # Liste os campos que você quer na sua API
        fields = ['id', 'nome_prato', 'preco', 'foto_prato_thumb_url', 'funcionario']