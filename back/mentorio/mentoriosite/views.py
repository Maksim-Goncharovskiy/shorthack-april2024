from rest_framework import viewsets
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import GraduateProfile, MentorRequest
from .serializers import GraduateProfileSerializer, MentorRequestSerializer

class GraduateProfileViewSet(viewsets.ModelViewSet):
    queryset = GraduateProfile.objects.all()
    serializer_class = GraduateProfileSerializer

    @action(detail=False, methods=['get'])
    def approved_profiles(self, request):
        approved_profiles = self.queryset.filter(approved=True)
        serializer = self.get_serializer(approved_profiles, many=True)
        return Response(serializer.data)

class MentorRequestViewSet(viewsets.ModelViewSet):
    queryset = MentorRequest.objects.all()
    serializer_class = MentorRequestSerializer