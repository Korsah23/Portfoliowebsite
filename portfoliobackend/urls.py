
from django.contrib import admin
from django.urls import path
from django.urls import include, path
from rest_framework import routers
from backendapp.views import PortfolioViewSet,TestimonialsViewSet
from django.conf import settings
from django.conf.urls.static import static

router = routers.DefaultRouter()
router.register(r'portfolio', PortfolioViewSet)

router.register(r'testimonials', TestimonialsViewSet)



# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
     path('admin/', admin.site.urls),
    path('', include(router.urls)),
    path('api-auth/', include('rest_framework.urls', namespace='rest_framework'))
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)



