# churras/serializers.py
from rest_framework import serializers
from .models import Prato
from funcionarios.models import Funcionario

class FuncionarioSerializer(serializers.ModelSerializer):
    class Meta:
        model = Funcionario
        fields = ['id', 'nome', 'sobrenome'] # Adicione os campos que desejar

class PratoSerializer(serializers.ModelSerializer):
    funcionario = FuncionarioSerializer(read_only=True)
    foto_prato_thumb_url = serializers.ImageField(source='foto_prato_thumb', read_only=True)

    class Meta:
        model = Prato
        # Liste os campos que você quer na sua API
        fields = ['id', 'nome_prato', 'preco', 'foto_prato_thumb_url', 'funcionario']