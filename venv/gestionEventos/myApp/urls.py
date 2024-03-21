from django.contrib.auth import views as auth
from django.urls import path, include
from . import views


urlpatterns = [
    path('', views.pagina_inicio, name='inicio'),
    path('organizador/<int:pk>', views.pagina_organizador, name='organizador'),

    path('logout', auth.LogoutView.as_view(template_name='index.html'), name='logout'),

    path('update_evento/<int:pk>', views.update_evento, name='update_evento')

]