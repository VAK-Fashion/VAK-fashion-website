from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('user/', include('user.urls')),
    path('pro/', include('prodect.urls')),
    path('admin/', admin.site.urls),

]
