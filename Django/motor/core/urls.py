from django.urls import path
from .views import index, contato, sobre, servico, veiculo
urlpatterns = [
    path('', index),
    path('veiculo/', veiculo),
    path('servico/', servico),
    path('sobre/', sobre),
    path('contato/', contato),
]
