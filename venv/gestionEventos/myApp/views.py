from django.shortcuts import get_object_or_404, render, redirect
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
def update_evento(request, pk):
    

    if request.method == 'POST':
        if 'form1' in request.POST:
            id = request.POST.get('check')
        
            Organizador = organizador.objects.get(pk=pk)
            event = evento.objects.get(pk=id)

            event.titulo = request.POST.get('titulo'+id) 
            event.descripcion = request.POST.get('descripcion'+id) 
            event.fecha = request.POST.get('fecha'+id) 
            event.hora = request.POST.get('hora'+id)
            event.costo = request.POST.get('costo'+id) 
            event.save()
        elif 'form2' in request.POST:
            id = request.POST.get('check')
            print(id)
            Organizador = get_object_or_404(organizador, pk=pk)
            print(Organizador)
            event = evento.objects.get(pk=id)
            print(event)
    
            event.delete()

       

        return redirect(reverse('organizador', kwargs={'pk': Organizador.pk} ))
        
@login_required()
def create_evento(request, pk):
    

    if request.method == 'POST':
        Organizador = get_object_or_404(organizador, pk=pk)
        event = evento()
        Sede = get_object_or_404(sede, organizador=Organizador)
        event.titulo = request.POST.get('titulo') 
        event.descripcion = request.POST.get('descripcion') 
        event.fecha = request.POST.get('fecha') 
        event.hora = request.POST.get('hora')
        event.costo = request.POST.get('costo') 
        event.organizador = Organizador
        event.sede = Sede
        event.save()

         # Asociar el nuevo evento al organizador
        

        return redirect(reverse('organizador', kwargs={'pk': Organizador.pk} ))
        

