from django.urls import path
from .views import RegistrationView,LoginView,DashboardView

urlpatterns = [
    # path('<int:user_id>/', views.showUserDetail, name='users'),
    # path('login/', views.showUserDetail, name='users'),
    path('register/', RegistrationView.as_view(),name='auth_register'),
    path('login/', LoginView.as_view(),name='auth_login'),
    path('dashboard/', DashboardView.as_view(),name='dash_view'),
]