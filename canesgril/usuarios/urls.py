from django.urls import path
from .views import check_auth, logout_view

# urls.py
urlpatterns = [
    path('check-auth/', check_auth, name='check-auth'),
    path('logout/', logout_view, name='logout-view')
]