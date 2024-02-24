from django.urls import path
from . import views
from django.conf.urls.static import static
from django.conf import settings


urlpatterns = [
    path('', views.home, name='home'),
    path('services/', views.services, name='services'),
    path('blog_page/',views.blog_page,name="blog_page"),
    path('news_page/',views.news_page,name="news_page"),
    path('product_list/',views.product_list,name="product_list"),
    path('product_detail/',views.product_detail,name="product_detail"),
    path('contact_page/',views.contact_page,name="contact_page"),
    path('issue_list/',views.issue_list,name="issue_list"),
    path('article/<int:pk>/', views.article_detail, name='article_detail'),
    path('services_location/', views.services_location,name="services_location"),
    path('doc_download/',views.doc_download,name="doc_download"),
    path('doc_request/',views.doc_request,name="doc_request"),
    path('inquiry_page/',views.inquiry_page,name="inquiry_page"),
    path('blog/<int:pk>/', views.blog_detail, name='blog_detail'),


]

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
