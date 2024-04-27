from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import MentorsViewSet, RequestsViewSet

router = DefaultRouter()
router.register(r'mentors', MentorsViewSet)
router.register(r'requests', RequestsViewSet)

urlpatterns = [
    path('api/', include(router.urls)),
]