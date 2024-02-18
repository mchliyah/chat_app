from django.urls import path
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    # path("", views.index, name="index"),  # Root URL
    path("test/", views.get_users, name="users" ),  # test backend to front sending msg
    path("", views.get_users, name="users" ),  # test backend to front sending msg
    path("home", views.home, name="home"),  # URL for the home page
    path("login", auth_views.LoginView.as_view(template_name="login.html"), name="login"),  # URL for logging in
    path("logout", auth_views.LogoutView.as_view(), name="logout"),  # URL for logging out
    path("signup", views.signup, name="signup"),
    path("register", views.register, name="register"),  # URL for registering
    # path("get_rooms/", views.get_rooms, name="get_rooms"),  # URL for getting all the chat rooms
    #path("get_messages/<str:room_name>/", views.get_messages, name="get_messages"),  # URL for getting all the messages in a chat room
    path("get_users", views.get_users, name="get_users"),  # URL for getting all the users
    #path("get_user_rooms/<str:username>/", views.get_user_rooms, name="get_user_rooms"),  # URL for getting all the chat rooms a user is in
    #path("<str:room_name>/", views.room, name="room"),  # URL for the chat room
    path("send_message", views.send_message, name="send_message"),  # URL for sending a message
]

TODO = "TODO: do not fiorget that the login logout and changepassword and set password are already implemented by django and can be used by default."

