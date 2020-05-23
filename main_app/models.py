from django.db import models
from django.conf import settings
import os, time, base64 

class Papaya(models.Model):
    name = models.CharField(max_length=255)
    isRipe = models.BooleanField()

class PapayaImage(models.Model):  
    url = models.CharField(max_length=255, unique=True)
    photo = models.ImageField(upload_to='./../images')

class User(models.Model):
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    email = models.CharField(max_length=40, unique=True)
    password = models.CharField(max_length=40)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class House(models.Model):
    street = models.CharField(max_length=255)
    city = models.CharField(max_length=25)
    zipcode = models.CharField(max_length=20)
    rooms = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

class Room(models.Model):
    price = models.IntegerField()
    available = models.BooleanField()
    house_room = models.ForeignKey(House, related_name="room", on_delete=models.CASCADE, default='0000000')
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    
class Tenant(models.Model):
    firstname = models.CharField(max_length=255)
    lastname = models.CharField(max_length=255)
    email = models.CharField(max_length=40, unique=True)
    phone = models.IntegerField()
    age = models.IntegerField()
    job = models.CharField(max_length=255)
    house_tenant = models.ForeignKey(House, related_name="tenant_house", on_delete=models.DO_NOTHING, default='0000000')
    room_tenant = models.ForeignKey(Room, related_name="tenant_room", on_delete=models.DO_NOTHING, default='0000000')
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)

    
    
    
        



