from django.contrib import admin

# Register your models here.
from .models import Dog, Owner

admin.site.register(Dog)
admin.site.register(Owner)