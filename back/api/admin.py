from django.contrib import admin

# Register your models here.
from .models import Location, Tour, Review

admin.site.register(Location)
admin.site.register(Tour)
admin.site.register(Review)
