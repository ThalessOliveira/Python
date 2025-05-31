from django.urls import path
from .views import index, contato, sobre, servico, veiculo
urlpatterns = [
    path('', index),
    path('contato', contato),
    path('sobre', sobre),
    path('servico', servico),
    path('veiculo', veiculo),
]
