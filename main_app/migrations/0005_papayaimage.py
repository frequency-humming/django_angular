# Generated by Django 2.1.7 on 2019-03-06 22:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0004_delete_papayaimage'),
    ]

    operations = [
        migrations.CreateModel(
            name='PapayaImage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('url', models.CharField(max_length=255, unique=True)),
                ('photo', models.ImageField(upload_to='./../images')),
            ],
        ),
    ]