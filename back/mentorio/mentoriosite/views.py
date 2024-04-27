from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.
def home(request):
    return HttpResponse("Добро пожаловать на сайт!")

def profile(request):
    return HttpResponse("Это ваш профиль")
 
def about(request):
	return HttpResponse('<h1>Наш клуб</h1>')