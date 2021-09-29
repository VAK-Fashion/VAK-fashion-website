from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import permissions
from .serialzer import prodectSerializers
from .models import prodectModels


def fileBin(filepath):
    try:
        with open(str(__file__.split("\prodect")[0]+filepath), "rb") as i:
            data = i.read()
            i.close()
        return data
    except:
        print("error")

# Create your views here.


class Pro_get_View(APIView):
    permission_classes = [permissions.AllowAny]
    serializer_classes = prodectSerializers
    queryset = prodectModels.objects.all()

    def get(self, request, id):
        import base64
        pro = self.queryset.filter(id=id).first()
        pro = self.serializer_classes(pro).data
        print(pro)
        pro['image'] = "data:image/jpeg;base64," + \
            base64.b64encode(fileBin(pro['image'])).decode()
        return Response(pro)
