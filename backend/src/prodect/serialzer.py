from rest_framework import serializers
from .models import prodectModels


class prodectSerializers(serializers.ModelSerializer):
    class Meta:
        model = prodectModels
        fields = '__all__'
