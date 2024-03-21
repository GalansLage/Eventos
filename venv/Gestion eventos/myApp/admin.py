from django.contrib import admin
from .models import organizador
from .models import sede
from .models import participante
from .models import evento
from .models import eventohasparticipante


# Register your models here.

admin.site.register(organizador)
admin.site.register(sede)
admin.site.register(participante)
admin.site.register(evento)
admin.site.register(eventohasparticipante)
