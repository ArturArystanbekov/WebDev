# api/urls.py
from django.urls import path
from . import views

urlpatterns = [
    # Company URLs
    path('companies/', views.company_list, name='company-list'),
    path('companies/<int:id>/', views.company_detail, name='company-detail'),
    path('companies/<int:id>/vacancies/', views.company_vacancies, name='company-vacancies'),

    # Vacancy URLs
    path('vacancies/', views.vacancy_list, name='vacancy-list'),
    path('vacancies/<int:id>/', views.vacancy_detail, name='vacancy-detail'),
    path('vacancies/top_ten/', views.vacancy_top_ten, name='vacancy-top-ten'),
]