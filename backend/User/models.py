# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models

# Create your models here.
class User(models.Model):
    name=models.CharField(max_length=30)
    username=models.CharField(max_length=30)
    email=models.EmailField()
    website=models.CharField(max_length=50)
    address=models.CharField(max_length=300)