
from django.contrib import admin
from django.urls import path
from .views import Pro_get_View

urlpatterns = [
    # this for public
    path('prodect/<str:id>', Pro_get_View.as_view()),
    # this is for admin
]
