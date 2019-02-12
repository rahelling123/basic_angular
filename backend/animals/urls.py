from django.urls import path
from .views import DogList, DogDetailDjango, index

urlpatterns = [
    path('', index, name='index'),
    path('dogs/', DogList.as_view(), name='doglist'),
    path('dogdetail/', DogDetailDjango.as_view(), name='dogdetail'),
]