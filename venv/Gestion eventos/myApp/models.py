from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class organizador(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    id_organizador = models.AutoField(primary_key=True)
    nombre = models.CharField(max_length=255,null=True)
    correo = models.EmailField(null = True)

    class Meta:
        db_table = 'public.organizador'
    def __str__(self):
        return self.nombre
    

class sede(models.Model):
    id_sede = models.IntegerField(primary_key=True)
    organizador = models.ForeignKey(organizador, on_delete=models.CASCADE)
    nombre = models.CharField(max_length=255,null=True)
    direccion = models.TextField(null=True)
    capacidad = models.IntegerField(null=True)

    class Meta:
        db_table = 'public.sede'        
    def __str__(self):
        return self.nombre

class evento(models.Model):
    id_evento = models.AutoField(primary_key=True)
    titulo = models.CharField(max_length=255,null=True)
    organizador = models.ForeignKey(organizador, on_delete=models.CASCADE)
    sede = models.ForeignKey(sede, on_delete=models.CASCADE)
    descripcion = models.TextField(blank=True, null=True)
    fecha = models.DateField(blank=True, null=True)
    hora = models.TimeField(blank=True, null=True)
    costo = models.IntegerField(blank=True, null=True)

    class Meta:
        db_table = 'public.evento'
        constraints = [
            models.UniqueConstraint(fields=['titulo', 'organizador'], name='unique_evento_organizador')
        ]
    def __str__(self):
        return self.titulo

class participante(models.Model):
    id_participante = models.AutoField(primary_key=True)
    organizador = models.ForeignKey(organizador, on_delete=models.CASCADE)
    correo = models.EmailField(null=True)
    nombre = models.CharField(max_length=255,null=True)

    class Meta:
        db_table = 'public.participante'

    def __str__(self):
        return self.nombre

class eventohasparticipante(models.Model):
    evento = models.ForeignKey(evento, on_delete=models.CASCADE)
    participante = models.ForeignKey(participante, on_delete=models.CASCADE)

    class Meta:
        db_table = 'public.evento_has_participante'
        unique_together = ('evento', 'participante')   \

   