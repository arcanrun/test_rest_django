from django.db import models

class Post(models.Model):
    title = models.CharField(max_length=200)
    text = models.TextField(max_length=200)

class CoffeShops(models.Model):
    name = models.TextField()
