from django.shortcuts import render
from .serializer import User, Register, Login
# Create your views here.
from rest_framework.response import Response
from rest_framework import generics, permissions, serializers
from .models import Users
from django.conf import settings
from rest_framework.authtoken.views import Token
from rest_framework.authentication import SessionAuthentication
Use = settings.AUTH_USER_MODEL


class RegistrtView(generics.GenericAPIView):
    serializer_class = Register
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        print(request.data)
        serializers = self.get_serializer(data=request.data)
        if serializers.is_valid():
            user = serializers.save()
            token, ok = Token.objects.get_or_create(user=user)
            token = str(token)
            return Response({
                "email": user.email,
                "username": user.username,
                "token": token
            })
        else:
            return Response({
                "error": serializers.errors
            })


class UsersView(generics.RetrieveAPIView):
    permission_classes = [permissions.IsAuthenticated]

    serializer_class = Users
    queryset = Users.objects.all()
    # authentication_classes = [SessionAuthentication, BasicAuthentication]

    def post(self, request, *args, **kwargs):
        data = Users.objects.get(email=request.user)
        return Response({"ok": User(data).data})


class Loings(generics.GenericAPIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = Login

    def post(self, request, *args, **kwargs):
        # print(request.data)
        serializer = self.serializer_class(data=request.data)
        # user = serializer.validate(data=request.data)
        if serializer.is_valid():
            user = serializer.validated_data
            token = Token.objects.filter(user=user)

            return Response({
                "token": str(token[0]),
            })
        else:
            return Response({"error":
                             serializer.errors})
