# Generated by Django 5.0.2 on 2024-02-10 18:33

from django.db import migrations


class Migration(migrations.Migration):
    dependencies = [
        ("chat", "0002_user_email_alter_user_name_alter_user_password"),
    ]

    operations = [
        migrations.DeleteModel(
            name="Room",
        ),
        migrations.DeleteModel(
            name="UserMessage",
        ),
        migrations.DeleteModel(
            name="UserRoom",
        ),
    ]