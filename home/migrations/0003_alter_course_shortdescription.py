# Generated by Django 5.0.2 on 2024-03-18 02:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0002_remove_studentpassedcourse_course_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='shortDescription',
            field=models.CharField(blank=True, max_length=500),
        ),
    ]
