from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import GraduateProfileViewSet, MentorRequestViewSet

router = DefaultRouter()
router.register(r'graduate-profiles', GraduateProfileViewSet)
router.register(r'mentor-requests', MentorRequestViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]