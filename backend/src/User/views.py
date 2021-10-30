from rest_framework.response import Response
from .serializer import *
from rest_framework import viewsets, generics, permissions
from rest_framework.authtoken.views import Token


class UserView(viewsets.ModelViewSet):
    permission_classes = [permissions.IsAuthenticated]
    serializer_class = Userserializer
    queryset = User.objects.all()

    def get_queryset(self):
        return User.objects.all().filter(email=self.request.user)


class RegisterView(generics.GenericAPIView):
    serializer_class = Register
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        data = request.data
        ss = self.serializer_class(data=data)
        if ss.is_valid():
            user = ss.save()
            token, _ = Token.objects.get_or_create(user=user)
            return Response({
                "token": str(token)
            })
        return Response(ss.errors)


class LoginView(generics.GenericAPIView):
    serializer_class = Login
    permission_classes = [permissions.AllowAny]

    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data
        token = Token.objects.get(user=user)
        return Response({

            "token": str(token)
        })
