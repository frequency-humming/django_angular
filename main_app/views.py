from django.views import View
from django.http import JsonResponse
import json
from .models import Papaya, PapayaImage, User, House, Room, Tenant
import os, time, base64
from os import listdir


class Papayas(View):

    def get(self, request):
        return JsonResponse({'status':'ok', 'papayas': list(Papaya.objects.values().all())})

    def post(self, request):
        data = json.loads(request.body.decode())
        #print(type(data),data)
        Papaya.objects.create(name=data['name'],isRipe=data['isRipe'])
        return JsonResponse({'status':'ok'})

class PapayaDetails(View):

    def get(self, request, papaya_id):
        return JsonResponse({'status':'ok'})

    def put(self, request, papaya_id):
        return JsonResponse({'status':'ok'})

    def delete(self, request, papaya_id):
        return JsonResponse({'status':'ok'})

class PapayaImages(View):
    def post(self,request):
        
        #print(request.body)
        image = int(time.time())
        image_64 = base64.decodestring(request.body)
        imagefile = open('./images/'+str(image)+'.png', 'wb')
        imagefile.write(image_64)
        imagefile.close()
        
        return JsonResponse({'status':'ok'})

class PapayaInfo(View):
    def post(self,request):
        data = json.loads(request.body.decode())
        print(data)

        return JsonResponse({'status':'ok'})

class Houses(View):

    def get(self, request):
        
        count = House.objects.filter(city="manchester").count()
        pic = {}
        for i in range(1,count+1):
            image = open(f'./images/manchester_{i}.png', 'rb') 
            #image_read = image.read() 
            image_64_encode = base64.encodestring(image.read()).decode()
            pic[i] = image_64_encode
        return JsonResponse({'picture': pic,'houses': list(House.objects.filter(city="manchester").values())})

    def post(self, request):
        data = json.loads(request.body.decode())
        print(type(data),data)
        House.objects.create(street=data['street'],city=data['city'],zipcode=data['zipcode'],rooms=data['rooms'])
        return JsonResponse({'status':'ok'})

class TenantImages(View):

    def get(self, request):
        
        pic = {}
        pic_files = os.listdir('./TenantImages')
        for i in range(len(pic_files)):
            image = open(f'./tenantImages/{pic_files[i]}', 'rb') 
            #image_read = image.read() 
            image_64_encode = base64.encodestring(image.read()).decode()
            pic[i] = image_64_encode
        
        return JsonResponse({'picture': pic})

    def post(self,request):
        
        #print(request.body)
        image = int(time.time())
        image_64 = base64.decodestring(request.body)
        imagefile = open('./tenantImages/'+str(image)+'.png', 'wb')
        imagefile.write(image_64)
        imagefile.close()
        
        return JsonResponse({'status':'ok'})




    

    


