from django.db import models

def user_directory_path(instance, filename):
    return "user_{0}/{1}".format(instance.user.id, filename)

class Mentors(models.Model):
    mentor_id=models.IntegerField(primary_key=True, default=1)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    birthday= models.DateField()
    #photo=models.ImageField(upload_to=user_directory_path default=default_user_image())
    description=models.TextField()

class Requests(models.Model):
    mentor_id=models.IntegerField(primary_key=True)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
    contact = models.CharField(max_length=50)
    message=models.TextField()