# Generated by Django 5.2.2 on 2025-06-28 12:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('churras', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='prato',
            name='foto_prato',
            field=models.ImageField(blank=True, null=True, upload_to='fotos_pratos/'),
        ),
    ]
