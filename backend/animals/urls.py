from django.urls import path
from .views import DogList, index

urlpatterns = [
    path('', index, name='index'),
    path('dogs/', DogList.as_view(), name='doglist')
]