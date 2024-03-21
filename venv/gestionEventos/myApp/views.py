from django.shortcuts import render, redirect
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.http import HttpRequest,HttpResponse
from .models import organizador
from .models import evento
from .models import participante
from .models import sede
from django.contrib import messages
from django.views.generic import ListView, DetailView, UpdateView, CreateView

# Create your views here.

def pagina_inicio(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            # Verifica si el usuario es un médico
            if organizador.objects.filter(user=user).exists():
                Organizador = organizador.objects.filter(user=user)[0]
                return redirect(reverse('organizador', kwargs={'pk': Organizador.pk}) ) # Cambia 'ruta-organizador' por la ruta real para organizadores

            else:
                messages.error(request, 'Usuario no tiene un rol válido.')
        else:
            messages.error(request, 'Credenciales inválidas. Inténtalo de nuevo.')

    return render(request, 'index.html')
    

@login_required
def pagina_organizador(request, pk):
    """Este es el detalle organizador"""
    Organizador = organizador.objects.get(pk=pk)
    eventos = evento.objects.filter(organizador=Organizador)
    return render(request, 'reserva.html', context={'organizador':Organizador,'eventos':eventos})
    

########### Evento CRUD ##################
@login_required()
def update_evento(request):
    id = request.POST.get('check')
    print(id)
    # print(request.POST.get('nombre'))
    if request.method == 'POST':
        try:
            # print('igkushdbkushd',request.POST.get('genero'))
            
            event = evento.objects.get(pk=id)
            
           
            # print(fecha)
            event.titulo = request.POST.get('titulo')
            event.descripcion = request.POST.get('descripcion')
            event.fecha = request.POST.get('fecha')
            event.hora = request.POST.get('hora')
            event.costo = request.POST.get('costo')
            event.save()

            return render(request, 'reserva.html', {'evento':event})
            
        except evento.DoesNotExist:
            return render(request, 'reserva.html', {'evento':event, 'error':True })
