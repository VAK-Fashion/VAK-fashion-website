from rest_framework import serializers
from django.contrib.auth import authenticate, get_user_model

Users = get_user_model()


class User(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('username', 'first_name', 'last_name',
                  'email', 'PhoneNumber', 'id')


class Register(serializers.ModelSerializer):
    class Meta:
        model = Users
        fields = ('username', 'email', 'password', 'PhoneNumber')

    def create(self, validated_data):
        user = Users.objects.create_user(
            **validated_data, is_superuser=False, is_staff=False, is_active=True
        )
        return user


class Login(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, data):
        user = authenticate(**data)
        if user and user.is_active:
            return user
        raise serializers.ValidationError(
            {"error": "invalid email  and password"})
