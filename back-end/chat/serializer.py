from rest_framework import serializers
from .models import *

class ReacSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        feilds = ['name', "email"]

