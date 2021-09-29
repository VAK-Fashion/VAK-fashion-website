# Generated by Django 3.2.6 on 2021-09-05 07:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0002_alter_users_phonenumber'),
    ]

    operations = [
        migrations.AlterField(
            model_name='users',
            name='PhoneNumber',
            field=models.CharField(error_messages={'unique': 'A user with that Phone Number already exists.'}, max_length=15, null=True, unique=True),
        ),
    ]