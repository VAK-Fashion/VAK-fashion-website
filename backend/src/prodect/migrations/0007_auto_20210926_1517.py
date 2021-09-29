# Generated by Django 3.2.6 on 2021-09-26 09:47

import colorfield.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('prodect', '0006_auto_20210926_1508'),
    ]

    operations = [
        migrations.CreateModel(
            name='Color',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('Color', colorfield.fields.ColorField(default='#ffff', max_length=18)),
            ],
        ),
        migrations.AddField(
            model_name='prodectmodels',
            name='color',
            field=models.ManyToManyField(related_name='color', to='prodect.Color'),
        ),
    ]