from churras.views import ViewTesteAPI
from django.urls import path
from . import views

urlpatterns = [
    path('testar/', ViewTesteAPI.as_view(), name='test-api'),
    path('pratos/', views.lista_pratos, name='lista_pratos'),
    path('pratos/<int:prato_id>/', views.detalhe_prato, name='detalhe_prato'),
]