# Generated by Django 4.0.4 on 2022-05-12 06:05

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0004_alter_documents_options'),
    ]

    operations = [
        migrations.RenameField(
            model_name='courier',
            old_name='name',
            new_name='first_name',
        ),
        migrations.RenameField(
            model_name='courier',
            old_name='surname',
            new_name='last_name',
        ),
        migrations.RenameField(
            model_name='courier',
            old_name='patronymic',
            new_name='middle_name',
        ),
    ]
