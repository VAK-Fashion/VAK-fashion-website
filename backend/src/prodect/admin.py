from django.contrib import admin
from .models import prodectModels, Size, Color
# Register your models here.
admin.site.register(prodectModels)
admin.site.register(Size)
admin.site.register(Color)
