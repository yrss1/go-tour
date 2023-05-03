from django.shortcuts import render
from rest_framework import generics
from .models import Location, Tour, Review
from .permissions import IsOwnerOrReadOnly, IsAdminOrReadOnly
from .serializers import LocationSerializer, TourSerializer, ReviewSerializer
from rest_framework.permissions import IsAuthenticatedOrReadOnly, IsAuthenticated


# Create your views here.

# list of Locations
class LocationAPIView(generics.ListAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
    permission_classes = (IsOwnerOrReadOnly,)


# Location detail
class LocationAPIDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Location.objects.all()
    serializer_class = LocationSerializer
    permission_classes = (IsOwnerOrReadOnly,)


# list of tours
class TourAPIView(generics.ListCreateAPIView):
    serializer_class = TourSerializer

    permission_classes = (IsOwnerOrReadOnly,)

    def get_queryset(self):
        location_id = self.kwargs['location_id']
        queryset = Tour.objects.filter(location=location_id)
        return queryset


# tour detail
class TourAPIDetailView(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = TourSerializer
    permission_classes = (IsOwnerOrReadOnly,)

    def get_queryset(self):
        location_id = self.kwargs['location_id']
        queryset = Tour.objects.filter(location=location_id)
        return queryset


# list of review
class ReviewAPIView(generics.ListAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer


# create review
class ReviewCreateAPIView(generics.CreateAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = (IsOwnerOrReadOnly,)


# review detail
class ReviewAPIDetailView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Review.objects.all()
    serializer_class = ReviewSerializer
    permission_classes = (IsOwnerOrReadOnly,)