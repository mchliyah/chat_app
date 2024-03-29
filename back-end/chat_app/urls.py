"""
URL configuration for chat_app project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.0/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path, include
from chat.views import *


urlpatterns = [
    path("admin", admin.site.urls),
    path("test", UserView.as_view(), name="user_view"),
    path("", include("chat.urls")),
    # path("test/", include("chat.urls")),
    # path("chat/", include("chat.urls")),
    # path("home/", include("chat.urls")),
    # path("login/", include("chat.urls")),
    # path("register/", include("chat.urls")),
    # path("signup/", include("chat.urls")),
    # path("get_rooms/", include("chat.urls")),
    #path("get_messages/<str:room_name>/", include("chat.urls")),
    # path("get_users/", include("chat.urls")),
    # path("get_user_rooms/<str:username>/", include("chat.urls")),
    #path("<str:room_name>/", include("chat.urls")),
]
