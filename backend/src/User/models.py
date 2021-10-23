from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid
from rest_framework.authtoken.models import Token
from django.dispatch import receiver
from django.db.models.signals import post_save


class User(AbstractUser):
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False,
        unique=True
    )
    firstName = models.CharField(
        max_length=50,
        blank=True,
        null=True

    )
    LastName = models.CharField(
        max_length=50,
        blank=True,
        null=True
    )
    email = models.EmailField(
        max_length=100,
        unique=True,
    )
    Telephone = models.IntegerField(
        # max_length=15,
        unique=True,
        blank=True,
        null=True
    )
    company = models.CharField(
        max_length=100,
        blank=True,
        null=True
    )
    address = models.TextField(
        max_length=500,
        blank=True,
        null=True
    )
    Apartment = models.CharField(
        max_length=50,
        blank=True,
        null=True
    )
    city = models.CharField(
        max_length=100,
        blank=True,
        null=True
    )
    pinCode = models.IntegerField(
        # max_length=6,
        blank=True,
        null=True
    )
    username = models.CharField(
        'username',
        max_length=50,
        unique=True,
    )
    first_name = None
    last_name = None
    groups = None
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ['firstName', 'LastName', 'username']

    def __unicode__(self):
        return str(self.id)

    def has_perm(self, perm, obj=None):
        return True

    def has_module_perms(self, app_label):
        return True


@receiver(post_save, sender=User)
def create_token(sender, **kwargs):
    if kwargs.get('created', False):
        Token.objects.create(user=kwargs['instance'])
