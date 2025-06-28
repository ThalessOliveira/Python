from django.db import models
from datetime import datetime

class Prato (models.Model):

    nome_prato = models.CharField( max_length=255)
    ingredientes = models.CharField(max_length=255)
    modo_preparo = models.CharField(max_length=255)
    tempo_preparo = models.IntegerField()
    rendimento = models.CharField(max_length=10)
    categoria = models.CharField(max_length=255)
    date_prato = models.DateTimeField(default=datetime.now, blank=True)
    preco = models.DecimalField(max_digits=5, decimal_places=2)
    foto_prato = models.ImageField(upload_to='fotos_pratos/', blank=True, null=True)

    def __str__(self):
        return self.nome_prato