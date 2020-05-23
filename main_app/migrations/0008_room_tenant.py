# Generated by Django 2.1.7 on 2019-03-12 23:42

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('main_app', '0007_auto_20190312_1749'),
    ]

    operations = [
        migrations.CreateModel(
            name='Room',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('price', models.IntegerField()),
                ('available', models.BooleanField()),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('house_room', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='room', to='main_app.House')),
            ],
        ),
        migrations.CreateModel(
            name='tenant',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('firstname', models.CharField(max_length=255)),
                ('lastname', models.CharField(max_length=255)),
                ('email', models.CharField(max_length=40, unique=True)),
                ('phone', models.IntegerField()),
                ('age', models.IntegerField()),
                ('job', models.CharField(max_length=255)),
                ('created_at', models.DateTimeField(auto_now_add=True)),
                ('updated_at', models.DateTimeField(auto_now=True)),
                ('house_tenant', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, related_name='tenant', to='main_app.House')),
            ],
        ),
    ]