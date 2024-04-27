from rest_framework import viewsets
from .models import Mentors, Requests
from .serializers import MentorsSerializer, RequestsSerializer

class MentorsViewSet(viewsets.ModelViewSet):
    queryset = Mentors.objects.all()
    serializer_class = MentorsSerializer

class RequestsViewSet(viewsets.ModelViewSet):
    queryset = Requests.objects.all()
    serializer_class = RequestsSerializer
