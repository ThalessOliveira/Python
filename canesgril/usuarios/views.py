from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth import logout
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required

def check_auth(request):
    if request.user.is_authenticated:
        return JsonResponse({
            'authenticated': True,
            'username': request.user.username,
        })
    else:
        return JsonResponse({'authenticated': False}, status=401)


@csrf_exempt  # Necessário para permitir requisições POST sem CSRF (opcional, veja observação abaixo)
def logout_view(request):
    if request.method == 'POST':
        if request.user.is_authenticated:
            logout(request)
            return JsonResponse({
                'status': 'success',
                'message': 'Logout realizado com sucesso'
            })
        else:
            return JsonResponse({
                'status': 'error',
                'message': 'Usuário não está autenticado'
            }, status=401)
    else:
        return JsonResponse({
            'status': 'error',
            'message': 'Método não permitido'
        }, status=405)