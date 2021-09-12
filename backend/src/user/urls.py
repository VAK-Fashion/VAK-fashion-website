from django.urls import path
from .views import *
urlpatterns = [
    path('sin-up/', view=RegistrtView.as_view()),
    path('user/', view=UsersView.as_view()),
    path('login/', view=Loings.as_view())
]
"""
post->
http://127.0.0.1:8000/user/user/
  "token": "Token 165722ea5615bde04af47dd7f8ddac32fbe37721"
{
    "email":"paragkoche0@gmail.com",
    "username":"parag",
    "password":"koche123",
    "PhoneNumber":"8080754162"
}
{
    "email":"yashgajbhiye03@gmail.com",
    "username":"Neon",
    "password":"Gunner@2000",
    "PhoneNumber":"7218633615"
}
"""
