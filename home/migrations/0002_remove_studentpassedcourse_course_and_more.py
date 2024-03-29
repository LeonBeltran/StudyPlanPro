# Generated by Django 5.0.2 on 2024-03-18 02:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('home', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='studentpassedcourse',
            name='course',
        ),
        migrations.RemoveField(
            model_name='course',
            name='coursePolicies',
        ),
        migrations.RemoveField(
            model_name='course',
            name='courseProfessors',
        ),
        migrations.RemoveField(
            model_name='course',
            name='passingRate',
        ),
        migrations.AddField(
            model_name='course',
            name='courseCoreq',
            field=models.ManyToManyField(blank=True, to='home.course'),
        ),
        migrations.AddField(
            model_name='course',
            name='coursePrereq',
            field=models.ManyToManyField(blank=True, to='home.course'),
        ),
        migrations.AlterField(
            model_name='course',
            name='courseDemand',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='student',
            name='failedCourses',
            field=models.ManyToManyField(blank=True, related_name='FailedCourse', to='home.course'),
        ),
        migrations.AlterField(
            model_name='student',
            name='passedCourses',
            field=models.ManyToManyField(blank=True, related_name='PassedCourse', to='home.course'),
        ),
        migrations.DeleteModel(
            name='StudentFailedCourse',
        ),
        migrations.DeleteModel(
            name='StudentPassedCourse',
        ),
    ]
