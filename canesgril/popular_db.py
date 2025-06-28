import os
import django

# Configure o ambiente do Django
# Certifique-se de que 'canesgril.settings' corresponde ao nome do seu projeto.
os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'canesgril.settings')
django.setup()

from django.db import connection
from churras.models import Prato

def executar_sql_do_arquivo(nome_arquivo):
    """
    Função para ler um arquivo .sql e executar seus comandos.
    """
    # Verifica se já existem pratos para não duplicar os dados
    if Prato.objects.exists():
        print("O banco de dados já parece estar populado. Script não será executado.")
        return

    print(f"Iniciando a execução do script SQL: {nome_arquivo}")
    try:
        with open(nome_arquivo, 'r', encoding='utf-8') as f:
            # Obtém um cursor para interagir com o banco de dados
            with connection.cursor() as cursor:
                # Lê o conteúdo completo do arquivo
                sql_script = f.read()
                # Para SQLite, podemos executar múltiplos comandos com executescript
                # Para outros bancos, pode ser necessário dividir os comandos por ';'
                # e executá-los um a um.
                cursor.executescript(sql_script)

        print("\nArquivo SQL executado com sucesso!")
        print(f"{Prato.objects.count()} pratos foram inseridos no banco de dados.")

    except FileNotFoundError:
        print(f"ERRO: O arquivo '{nome_arquivo}' não foi encontrado. Verifique o caminho.")
    except Exception as e:
        print(f"Ocorreu um erro durante a execução do SQL: {e}")


if __name__ == '__main__':
    # O nome do arquivo SQL que queremos executar
    arquivo_sql = 'popula_pratos.sql'
    executar_sql_do_arquivo(arquivo_sql)