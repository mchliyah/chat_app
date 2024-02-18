from django.db import models


# class Room(models.Model):
#     name = models.CharField(max_length=100)
    
#     def __str__(self):
#         return self.name

class Message(models.Model):
    value = models.CharField(max_length=1000)
    date = models.DateTimeField(auto_now_add=True)
    user = models.CharField(max_length=100)
    room = models.CharField(max_length=100)
    
    def __str__(self):
        return self.user

class User(models.Model):
    username = models.CharField(max_length=15) 
    email = models.EmailField(max_length=30)    # i did't know that email is a field in django
    password = models.CharField(max_length=128) 

    def __str__(self):
        return self.username

# class UserRoom(models.Model):
#     user = models.CharField(max_length=100)
#     room = models.CharField(max_length=100)
    
#     def __str__(self):
#         return self.user

# class UserMessage(models.Model):
#     user = models.CharField(max_length=100)
#     message = models.CharField(max_length=1000)
    
#     def __str__(self):
#         return self.user


#TODO: need to check the data is been saved in the database or not.
