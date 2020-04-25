# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render
from .models import User
from django.http import HttpResponse
import json


def add_users(request):
    try:
        users_data = json.loads(request.body.decode('utf-8'))
        users = users_data.get("users")
        user_data_to_be_updated = []
        if users:
            for user in users:
                address_dict = user.get("address", {})
                address_dict.pop('geo')
                address = ",".join(address_dict.values())
                user_object = User(name=user.get("name", ""),
                                   username=user.get("username", ""),
                                   email=user.get("email", ""),
                                   website=user.get("website", ""),
                                   address=address
                                   )
                user_data_to_be_updated.append(user_object)
            User.objects.bulk_create(user_data_to_be_updated)
            return HttpResponse("Data inserted successfully")
        else:
            return HttpResponse("User data is empty")
    except Exception as e:
        print(e)
        return HttpResponse(status=500)
