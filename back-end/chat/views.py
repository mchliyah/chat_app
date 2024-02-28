from django.shortcuts import render, redirect
from django.contrib.auth import authenticate, login
from django.http import HttpResponse
from .models import  Message, User#, UserRoom, Room,
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.decorators import login_required
from rest_framework.decorators import api_view 
from rest_framework.decorators import APIView 
from rest_framework.response import Response 
from django.views.decorators.csrf import csrf_exempt
from .serializer import *
from .forms import UserCreationForm
import os


#TODO: i have to test this if it works after instalation 

@api_view(['GET'])
def send_some_data(request):
    print ("i am sending data ")
    return Response({
        "data": "Hello from django backend"
    })

@api_view(['GET'])
def get_users(request):
    users = User.objects.all()
    return Response({
        "users": users
    })

@api_view(['POST'])
def create_user(request):
    print (request.data)
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid(raise_exception=True):
        serializer.save()
        return Response(serializer.data)


class UserView(APIView):
    def get(self, request):
        users = User.objects.all()
        serializer = UserSerializer(users, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = UserSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)

def index(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            # Redirect to a different page after successful login (not redirecting as expected need to check it)
            return redirect('home')  # Assuming 'home' is the name of the URL pattern for your homepage (need to check this)
        #else:
            # Handle invalid login credentials
            # You might want to display an error message in the template
    return render(request, "index.html", {})
@api_view(['GET'])
def login(request):
    if request.user.is_authenticated:
        return redirect('home')  # Redirect to the home page if the user is logged in
    else:
        return redirect('login.html')


@login_required
def home(request):
    return render(request, "home.html")

# def room(request, room_name):
#     return render(request, "room.html", {
#         "room_name": room_name,
#         "username": request.user.username,
#     })

@api_view(['GET'])
def csrftoken(request):
    csrf_token = os.getenv('SUCRET_KEY')

    if csrf_token:
        return HttpResponse(csrf_token)
    else:
        return Response({"error": "CSRF token not found in environment variables"}, status=500)


@api_view(['POST'])
def signup(request):
    if request.method == 'POST':
        print ("methiod is post: ", request.POST.get('username'))
        form = UserCreationForm(request.POST)
        print (form)
        if form.is_valid():
            print ("form is valid")
            form.save()
            return redirect('login')
        else:
            print ("form is not valid")
    else:
        form = UserCreationForm()
    return render(request, 'signup.html', {'form': form})


# def signup(request):
#     if request.method == "POST":
#         data = request.data
#         username = data.get("username")
#         email = data.get("email")
#         password = data.get("password")
#         confirm_password = data.get("confirm_password")
        
#         # Check if password matches confirmation
#         if password != confirm_password:
#             return Response({"error": "Passwords do not match"}, status=status.HTTP_400_BAD_REQUEST)

#         # Create new user object
#         try:
#             user = User.objects.create_user(username, email, password)
#             user.is_active = False
            
#             # Send activation email
#             subject = f"Activate Your Account at Our Site!"
#             message = f"To activate your account at our site, simply click the link below:\n\n{settings.BASE_URL}/activate/{user.activation_key}\n\nIf you did not create an account, please ignore this email."
#             send_mail(subject, message, settings.EMAIL_HOST_USER, [email], fail_silently=False)
            
#             user.save()
#             return Response({"message": "Successfully created user! Activation email sent!"}, status=status.HTTP_201_CREATED)
#         except Exception as e:
#             print(f"An error occurred while creating user: {str(e)}")
#             return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)

#     return Response({"error": "Method Not Allowed"}, status=status.HTTP_405_METHOD_NOT_ALLOWED)
# def get_rooms(request):
#     rooms = Room.objects.all()
#     return HttpResponse(rooms)

def get_messages(request, room_name):
    messages = Message.objects.filter(room=room_name)
    return HttpResponse(messages)

def get_users(request):
    users = User.objects.all()
    return HttpResponse(users)

# def get_user_rooms(request, username):
#     user_rooms = UserRoom.objects.filter(user__username=username)
#     return HttpResponse(user_rooms)

@api_view(['POST'])
def register(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')  # Redirect to the login page after successful registration (not working yet need to check it)
    else:
        form = UserCreationForm()
    return render(request, 'register.html', {'form': form})


@login_required
def send_message(request):
    if request.method == 'POST':
        message_text = request.POST.get('message_text')
        # if the user is loged , login_required decorator should handle this case
        sender = request.user
        # Assuming i have a room name associated with the message (need to check how to handel this or it may be created by default )
        room_name = request.POST.get('room_name')
        if message_text and sender and room_name:
            message = Message.objects.create(
                text=message_text,
                sender=sender,
                room=room_name
            )
            # i may need more code here to handle the message
            return redirect('home')  # Redirect to the home page after sending the message
    # i need to handle the case where the message is not sent or the method is not POST (learn more this part of django is not clear to me yet)
    return redirect('home')  # Redirect to the home page in case of any issues


#TODO: nothing is redirecting as expected the fuck is wrong with django (it's me haha)