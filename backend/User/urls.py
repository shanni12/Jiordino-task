from django.urls import path
from .views import add_users
urlpatterns=[
    path("add_users/",add_users)
]