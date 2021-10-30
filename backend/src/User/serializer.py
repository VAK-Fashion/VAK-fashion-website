from rest_framework import serializers
from .models import User
from django.contrib.auth import authenticate


class Userserializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'firstName', 'LastName', 'email', 'Telephone',
                  'company', 'address', 'Apartment', 'city', 'pinCode', 'username')


class Register(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('firstName', 'LastName', 'email', 'password')
        extra_kwargs = {'password': {'write_only': True}}

    def create(self, validated_data):
        user = User.objects.create_user(
            **validated_data,
            is_superuser=False,
            is_staff=False,
            is_active=True,
            username=validated_data['email']
        )
        return user


class Login(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()

    def validate(self, attrs):
        # print(attrs['email'])
        user = authenticate(**attrs)
        if user and user.is_active:
            return user
        raise serializers.ValidationError({
            "error": "invalid email and password"
        })
# ha kay bol ra hai = kahi nahi to kuch to kar = ave bar bar kam dere h, ghr pr floring  chalu h ooo thik hai to tu back end kar pura = ok =chalu kar abhi ?? mujhe smjna pdega pehle prac haa... jo nahi sumja va lik ya kay hai ok...
# uuid mtlb???????????? unique id
