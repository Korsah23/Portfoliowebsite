from .models import Testimonials, Portfolio
from rest_framework import serializers


#Testimonial model serializer
class TestimonialsSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Testimonials
        fields = ['name', 'message', 'image']



#portfolio model serializer
class PortfolioSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Portfolio
        fields = ['project', 'githubLink','liveDemoLink','portfolioImage']
