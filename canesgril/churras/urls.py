from churras.views import ViewTesteAPI
from django.urls import path

urlpatterns = [
    path('testar/', ViewTesteAPI.as_view(), name='test-api'),
]