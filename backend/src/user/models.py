from django.db import models
from django.contrib.auth.models import AbstractUser
import uuid
from rest_framework.authtoken.models import Token
from django.dispatch import receiver
from django.db.models.signals import post_save


class Users(AbstractUser):
    id = models.UUIDField(
        primary_key=True,
        default=uuid.uuid4,
        editable=False,
        unique=True
    )
    username = models.CharField(
        'username',
        max_length=50,
        unique=True,
        error_messages={
            'unique': 'A username with username already exits'
        }
    )
    email = models.EmailField(
        unique=True,
        blank=False,
        null=False,
        error_messages={
            'unique': "A user with that email already exists.",
        }
    )
    PhoneNumber = models.CharField(
        blank=False,
        null=True,
        unique=True,
        max_length=15,
        error_messages={
            'unique': "A user with that Phone Number already exists.",
        }
    )
    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = ['username', 'PhoneNumber']

    def __unicode__(self):
        return self.email


@receiver(post_save, sender=Users)
def create_token(sender, **kwargs):
    if kwargs.get('created', False):
        Token.objects.create(user=kwargs['instance'])
