from django.db import models


class Room(models.Model):
    name = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name

class Message(models.Model):
    value = models.CharField(max_length=1000)
    date = models.DateTimeField(auto_now_add=True)
    user = models.CharField(max_length=100)
    room = models.CharField(max_length=100)
    
    def __str__(self):
        return self.user


class User(models.Model):
    name = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    
    def __str__(self):
        return self.name

class UserRoom(models.Model):
    user = models.CharField(max_length=100)
    room = models.CharField(max_length=100)
    
    def __str__(self):
        return self.user

class UserMessage(models.Model):
    user = models.CharField(max_length=100)
    message = models.CharField(max_length=1000)
    
    def __str__(self):
        return self.user


#TODO: need to check the data is been saved in the database or not.
