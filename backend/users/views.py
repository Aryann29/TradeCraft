from django.shortcuts import HttpResponse
from rest_framework import generics
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import authenticate,login,logout
from rest_framework.permissions import AllowAny,IsAuthenticated
from rest_framework.views import APIView
from .serializers import RegistrationSerializer,UserSerializer,LoginSerializer
from rest_framework_simplejwt.tokens import RefreshToken



class RegistrationView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegistrationSerializer


class LoginView(generics.GenericAPIView):
    serializer_class = LoginSerializer
    
    def post(self,request,*args, **kwargs):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username,password=password)
        if user is not None:
            refresh = RefreshToken.for_user(user)
            user_serializer = UserSerializer(user)
            return Response({
                "refresh": str(refresh),
                "access": str(refresh.access_token),
                "user" : user_serializer.data
            })
        else:
            return Response({'detail':'Invalid Creds'}, status=401)
            
class DashboardView(APIView):
    permission_classes = [IsAuthenticated]  

    def get(self, request):
        user = request.user
        if user.is_authenticated: 
            serializer = UserSerializer(user)
            return Response(serializer.data)  
        else:
            return Response({"error": "User is not authenticated"}, status=401)