# Generated by Django 5.0.2 on 2024-05-10 12:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0004_alter_course_coursecoreq_alter_course_courseprereq'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='student',
            name='failedCourses',
        ),
        migrations.AddField(
            model_name='student',
            name='takeableCourses',
            field=models.ManyToManyField(blank=True, related_name='TakeableCourse', to='home.course'),
        ),
    ]
