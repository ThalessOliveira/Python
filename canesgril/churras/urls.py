from churras.views import ViewTesteAPI
from django.urls import path
from .views import ListaPratosAPIView
from . import views

urlpatterns = [
    path('testar/', ViewTesteAPI.as_view(), name='test-api'),
    path('pratos/', ListaPratosAPIView.as_view(), name='lista_pratos_api'),
    path('pratos/<int:prato_id>/', views.detalhe_prato, name='detalhe_prato'),
]