from rest_framework import serializers
from .models import Mentors, Requests

class MentorsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Mentors
        fields = ['mentor_id', 'first_name', 'last_name', 'birthday', 'photo', 'description']

class RequestsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Requests
        fields = ['mentor_id', 'first_name', 'last_name', 'contact', 'message']
