from django.db import models
from datetime import datetime
# from funcionarios.models import Funcionario
from django.contrib.auth.models import User
import uuid
from imagekit.models import ImageSpecField
from imagekit.processors import ResizeToFill

def get_file_path(_instance, filename):
    name = filename.split('.')[0]
    ext = filename.split('.')[-1]
    filename = f'fotos_pratos/{name}-{uuid.uuid4()}.{ext}'
    return filename

class Prato (models.Model):
    nome_prato = models.CharField( max_length=255)
    ingredientes = models.CharField(max_length=255)
    modo_preparo = models.CharField(max_length=255)
    tempo_preparo = models.IntegerField()
    rendimento = models.CharField(max_length=10)
    categoria = models.CharField(max_length=255)
    date_prato = models.DateTimeField(default=datetime.now, blank=True)
    preco = models.DecimalField(max_digits=5, decimal_places=2)

    foto_prato = models.ImageField(upload_to=get_file_path, blank=True, null=True)

    foto_prato_thumb = ImageSpecField(
        source='foto_prato',
        processors=[ResizeToFill(150, 150)],
        format='JPEG',
        options={'quality': 85}
    )
    funcionario = models.ForeignKey(User, on_delete=models.CASCADE, null=True, blank=True)
    publicado = models.BooleanField(default=False)

    def __str__(self):
        return self.nome_prato