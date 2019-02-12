from django.db import models

# Create your models here.

class Owner(models.Model):
    name = models.CharField(max_length=50)


class Dog(models.Model):
    name = models.CharField(max_length=50)
    location = models.CharField(max_length=60)
    owner = models.ForeignKey(Owner, related_name='owner', on_delete=models.CASCADE)

    def __str__(self):
        return self.name


