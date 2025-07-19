from django.urls import path
from .views import ListaPratosAPIView
from . import views

urlpatterns = [
    path('pratos/', ListaPratosAPIView.as_view(), name='lista_pratos_api'),
    path('pratos/<int:prato_id>/', views.detalhe_prato, name='detalhe_prato'),
]