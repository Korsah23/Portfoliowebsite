from django.db import models

# Create your models here.

class Testimonials(models.Model):
    name = models.CharField(max_length=100)
    message = models.CharField(max_length=500)
    image = models.ImageField(upload_to="testimonials")

    def __str__(self):
        return self.name




class Portfolio(models.Model):
    project = models.CharField(max_length=200)
    githubLink = models.CharField(max_length=1000)
    liveDemoLink = models.CharField(max_length=1000)
    portfolioImage = models.ImageField(upload_to="portfolio")


    def __str__(self):
        return self.project


