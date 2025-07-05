from django.contrib import admin
from .models import Prato

@admin.register(Prato) # Uma forma mais moderna e limpa de registrar
class ListandoPratos(admin.ModelAdmin):
    list_display = ('id', 'nome_prato', 'categoria', 'tempo_preparo', 'publicado') 
    list_display_links = ('id', 'nome_prato')
    search_fields = ('nome_prato', )
    list_filter = ('categoria', 'publicado') 
    list_editable = ('publicado', ) 
    list_per_page = 10
    
    # AÇÕES EM MASSA ADICIONADAS AQUI
    actions = ['marcar_como_publicado', 'remover_publicacao']

    def marcar_como_publicado(self, request, queryset):
        """
        Marca os pratos selecionados como 'Publicado'.
        Usa .update() para uma única e eficiente query ao banco de dados.
        """
        queryset.update(publicado=True)
        # Envia uma mensagem de sucesso para o usuário no admin
        self.message_user(
            request,
            f'{queryset.count()} pratos foram marcados como publicados com sucesso!'
        )
    
    # Define um nome mais amigável para a ação na interface do admin
    marcar_como_publicado.short_description = "Marcar pratos selecionados como Publicados"

    def remover_publicacao(self, request, queryset):
        """
        Marca os pratos selecionados como 'Não Publicado'.
        Usa .update() para uma única e eficiente query ao banco de dados.
        """
        queryset.update(publicado=False)
        self.message_user(
            request,
            f'{queryset.count()} pratos tiveram sua publicação removida com sucesso!'
        )
        
    remover_publicacao.short_description = "Remover publicação dos pratos selecionados"

# A linha abaixo não é mais necessária se usar o decorador @admin.register
# admin.site.register(Prato, ListandoPratos)