"""main URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/2.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""

from django.urls import path
from main_app.views import Papayas, PapayaDetails, PapayaImages, PapayaInfo, Houses, TenantImages

urlpatterns = [
    path('papaya', Papayas.as_view()),
    path('papaya/<int:papaya_id>', PapayaDetails.as_view()),
    path('papaya/images', PapayaImages.as_view()),
    path('tenant/images', TenantImages.as_view()),
    path('papaya/info', PapayaInfo.as_view()),
    path('house', Houses.as_view())
]


