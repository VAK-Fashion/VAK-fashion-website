from django.urls import path, include
from .views import *
from rest_framework.routers import DefaultRouter
router = DefaultRouter()
router.register(r'users', viewset=UserView)
urlpatterns = [
    path('Register/', RegisterView.as_view()),
    path('login/', LoginView.as_view()),
    path('info/', include(router.urls))
]
