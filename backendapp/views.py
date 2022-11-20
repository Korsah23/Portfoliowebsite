from django.shortcuts import render
from .models import Testimonials,Portfolio
from rest_framework import viewsets
from rest_framework import permissions
from rest_framework import permissions
from .serializers import  PortfolioSerializer,TestimonialsSerializer


# Create your views here.

class TestimonialsViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Testimonials to be viewed or edited.
    """
    queryset = Testimonials.objects.all()
    serializer_class = TestimonialsSerializer
   





class PortfolioViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows Portfolio to be viewed or edited.
    """
    queryset = Portfolio.objects.all()
    serializer_class = PortfolioSerializer
    



