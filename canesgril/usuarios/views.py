from django.shortcuts import render
from django.http import JsonResponse
from django.contrib.auth import logout, authenticate, login
# from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.decorators import login_required
from django.views.decorators.http import require_http_methods
from django.contrib.admin.views.decorators import staff_member_required
from django.http import JsonResponse, HttpRequest
from django.shortcuts import get_object_or_404
from django.contrib.auth.models import User
import json

from churras.models import Prato

def check_auth(request):
    if request.user.is_authenticated:
        return JsonResponse({
            'authenticated': True,
            'username': request.user.username,
        })
    else:
        return JsonResponse({'authenticated': False}, status=401)


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
    

@require_http_methods(["POST"])
def criar_conta_view(request):

    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            username = data.get('username')
            email = data.get('email')
            password = data.get('password')

            if not all([username, email, password]):
                return JsonResponse({'detail': 'Todos os campos (username, email, password) são obrigatórios.'}, status=400)

            if User.objects.filter(username=username).exists():
                return JsonResponse({'username': ['Um usuário com esse nome de usuário já existe.']}, status=400)

            if User.objects.filter(email=email).exists():
                return JsonResponse({'email': ['Um usuário com esse endereço de email já existe.']}, status=400)

            user = User.objects.create_user(username=username, email=email, password=password)
            user.save()

            return JsonResponse({'detail': 'Conta criada com sucesso!'})

        except json.JSONDecodeError:
            return JsonResponse({'detail': 'Requisição inválida. JSON malformado.'}, status=400)
        except Exception as e:
            print(f"Erro ao criar conta: {e}")
            return JsonResponse({'detail': 'Ocorreu um erro interno no servidor.'}, status=500)
    
    return JsonResponse({'detail': 'Método não permitido.'}, status=405)

@require_http_methods(["POST"])
def login_view(request):

    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            username = data.get('username')
            password = data.get('password')

            if not all([username, password]):
                return JsonResponse({'detail': 'Nome de usuário e senha são obrigatórios.'}, status=400)
            
            user = authenticate(request, username=username, password=password)

            if user is not None:
                login(request, user)
                return JsonResponse({'detail': 'Login realizado com sucesso!', 'username': user.username, 'is_superuser': user.is_superuser})
            else:
                return JsonResponse({'detail': 'Credenciais inválidas.'}, status=401)

        except json.JSONDecodeError:
            return JsonResponse({'detail': 'Requisição inválida. JSON malformado.'}, status=400)
        except Exception as e:
            print(f"Erro ao fazer login: {e}")
            return JsonResponse({'detail': 'Ocorreu um erro interno no servidor.'}, status=500)
    
    return JsonResponse({'detail': 'Método não permitido.'}, status=405)

class MembroEquipeFuncoes:
    @staff_member_required
    @require_http_methods(["POST"])
    def cria_prato(request: HttpRequest) -> JsonResponse:
        """
        Cria um novo prato no banco de dados.
        Espera dados de formulário (multipart/form-data) por causa do upload de imagem.
        """
        try:
            # Extrai os dados do request.POST
            nome_prato = request.POST.get('nome_prato')
            ingredientes = request.POST.get('ingredientes')
            modo_preparo = request.POST.get('modo_preparo')
            tempo_preparo = request.POST.get('tempo_preparo')
            rendimento = request.POST.get('rendimento')
            categoria = request.POST.get('categoria')
            preco = request.POST.get('preco')
            publicado = request.POST.get('publicado', 'off') == 'on' # Checkbox retorna 'on' ou não existe

            # Validação básica
            if not all([nome_prato, ingredientes, modo_preparo, tempo_preparo, rendimento, categoria, preco]):
                return JsonResponse({'status': 'error', 'message': 'Todos os campos são obrigatórios.'}, status=400)

            # Cria a instância do Prato
            # ✅ LÓGICA ATUALIZADA AQUI
            # O usuário logado (que é um membro da equipe) é automaticamente atribuído como o funcionário.
            novo_prato = Prato.objects.create(
                nome_prato=nome_prato,
                ingredientes=ingredientes,
                modo_preparo=modo_preparo,
                tempo_preparo=int(tempo_preparo),
                rendimento=rendimento,
                categoria=categoria,
                preco=float(preco),
                publicado=publicado,
                funcionario=request.user # Atribui o usuário da requisição
            )

            # Trata o upload da foto, se houver
            if 'foto_prato' in request.FILES:
                novo_prato.foto_prato = request.FILES['foto_prato']
            
            novo_prato.save()

            return JsonResponse({
                'status': 'success', 
                'message': 'Prato criado com sucesso!',
                'prato': {
                    'id': novo_prato.id,
                    'nome': novo_prato.nome_prato,
                    'criado_por': novo_prato.funcionario.username
                }
            }, status=201)

        except Exception as e:
            return JsonResponse({'status': 'error', 'message': f'Ocorreu um erro: {str(e)}'}, status=500)


    @login_required # Qualquer usuário logado pode ver os pratos, ou use @staff_member_required se for restrito
    @require_http_methods(["GET"])
    def carrega_pratos(request: HttpRequest) -> JsonResponse:
        """
        Carrega e retorna uma lista de todos os pratos.
        """
        try:
            # Filtra apenas os pratos publicados, se essa for a regra de negócio
            # Para a equipe ver todos, use: Prato.objects.all()
            pratos_query = Prato.objects.all().order_by('-date_prato')
            
            # Serializa os dados para JSON
            lista_pratos = []
            for prato in pratos_query:
                lista_pratos.append({
                    'id': prato.id,
                    'nome_prato': prato.nome_prato,
                    'ingredientes': prato.ingredientes,
                    'categoria': prato.categoria,
                    'preco': str(prato.preco),
                    'publicado': prato.publicado,
                    'foto_prato_url': prato.foto_prato.url if prato.foto_prato else None,
                    'foto_prato_thumb_url': prato.foto_prato_thumb.url if prato.foto_prato_thumb else None,
                })

            return JsonResponse(lista_pratos, safe=False)

        except Exception as e:
            return JsonResponse({'status': 'error', 'message': f'Ocorreu um erro: {str(e)}'}, status=500)


    @staff_member_required
    @require_http_methods(["POST"]) # HTML forms não suportam PUT, então POST é comum para atualização
    def atualizar_prato(request: HttpRequest, prato_id: int) -> JsonResponse:
        """
        Atualiza um prato existente.
        """
        try:
            prato = get_object_or_404(Prato, pk=prato_id)

            # Atualiza os campos com os dados recebidos do formulário
            prato.nome_prato = request.POST.get('nome_prato', prato.nome_prato)
            prato.ingredientes = request.POST.get('ingredientes', prato.ingredientes)
            prato.modo_preparo = request.POST.get('modo_preparo', prato.modo_preparo)
            prato.tempo_preparo = int(request.POST.get('tempo_preparo', prato.tempo_preparo))
            prato.rendimento = request.POST.get('rendimento', prato.rendimento)
            prato.categoria = request.POST.get('categoria', prato.categoria)
            prato.preco = float(request.POST.get('preco', prato.preco))
            prato.publicado = request.POST.get('publicado', 'off') == 'on'

            # Atualiza a foto se uma nova for enviada
            if 'foto_prato' in request.FILES:
                prato.foto_prato = request.FILES['foto_prato']

            prato.save()

            return JsonResponse({'status': 'success', 'message': 'Prato atualizado com sucesso!'})

        except Prato.DoesNotExist:
            return JsonResponse({'status': 'error', 'message': 'Prato não encontrado.'}, status=404)
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': f'Ocorreu um erro: {str(e)}'}, status=500)


    @staff_member_required
    @require_http_methods(["DELETE"])
    def deletar_prato(request: HttpRequest, prato_id: int) -> JsonResponse:
        """
        Deleta um prato do banco de dados.
        """
        try:
            prato = get_object_or_404(Prato, pk=prato_id)
            prato.delete()
            return JsonResponse({'status': 'success', 'message': 'Prato deletado com sucesso!'}, status=200)

        except Prato.DoesNotExist:
            return JsonResponse({'status': 'error', 'message': 'Prato não encontrado.'}, status=404)
        except Exception as e:
            return JsonResponse({'status': 'error', 'message': f'Ocorreu um erro: {str(e)}'}, status=500)