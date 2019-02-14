from django.http import HttpResponse
from django.shortcuts import render
from django.views.generic import DetailView
from rest_framework.response import Response

from .models import Dog
from rest_framework.views import APIView
from .serializers import DogSerializer
# Create your views here.


class DogDetailDjango(DetailView):
    model = Dog
    serializer_class = DogSerializer

    def get(self, queryset=None):
        return Dog.objects.filter(pk=2)

# class DogDetail(APIView):



class DogList(APIView):
    queryset = Dog.objects.all()
    serializer_class = DogSerializer

    def get(self, request):
        dogs = Dog.objects.all()
        return Response(dogs)


def index(APIView):
    return HttpResponse("Home Page")