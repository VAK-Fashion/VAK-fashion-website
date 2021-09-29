from django.db import models
import uuid
from colorfield.fields import ColorField
# Create your models here.


def fileName(instance, filename):
    import secrets
    filename = filename.split('.')[-1]
    return f"prodect/image/{instance.id}/{secrets.token_hex(10)}/{uuid.uuid4()}.{filename}"


class Size(models.Model):
    size = models.CharField(max_length=5)

    def __str__(self) -> str:
        return self.size


class Color(models.Model):
    Color = ColorField(default="#ffff", format="hexa")

    def __str__(self) -> str:
        return self.Color


class prodectModels(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    name = models.CharField(max_length=200, blank=False, null=False)
    dic = models.TextField(max_length=1000, blank=True, null=True)
    image = models.ImageField(upload_to=fileName)
    catagre = models.CharField(choices=(
        ('k', 'kurti'),
        ('l', 'leggings'),
        ('j', 'jeans'),
    ), blank=False, null=False, max_length=50)
    size = models.ManyToManyField(Size, related_name='Size')
    color = models.ManyToManyField(Color, related_name='color')

    def __str__(self) -> str:
        return self.name
