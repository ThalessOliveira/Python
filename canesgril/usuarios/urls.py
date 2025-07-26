from django.urls import path
from .views import check_auth, logout_view, criar_conta_view, login_view, MembroEquipeFuncoes

# urls.py
urlpatterns = [
    path('check-auth/', check_auth, name='check-auth'),
    path('logout/', logout_view, name='logout-view'),
    path('criar-conta/', criar_conta_view, name='criar-conta'),
    path('login/', login_view, name='login-view'),
    path('pratos/criar/', MembroEquipeFuncoes.cria_prato, name='criar-pratos'),
    path('pratos/listar/', MembroEquipeFuncoes.carrega_pratos, name='carregar-pratos'),
    path('pratos/atualizar/<int:prato_id>/', MembroEquipeFuncoes.atualizar_prato, name='atualizar-pratos'),
    path('pratos/deletar/<int:prato_id>/', MembroEquipeFuncoes.deletar_prato, name='deletar-pratos')
]