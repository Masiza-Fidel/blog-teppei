from django.shortcuts import render
from .models import Post
from django.shortcuts import render, get_object_or_404


def home(request):
    # Fetch blogs and news from the database
    blogs = Post.objects.filter(content_type='blog')
    news = Post.objects.filter(content_type='news')
    return render(request, 'home.html', {'blogs': blogs, 'news': news})



def services(request):
    # Fetch blogs and news from the database
    blogs = Post.objects.filter(content_type='blog')
    news = Post.objects.filter(content_type='news')
    return render(request, 'services.html', {'blogs': blogs, 'news': news})
def news_page(request):
    # Fetch blogs and news from the database
    blogs = Post.objects.filter(content_type='blog')
    news = Post.objects.filter(content_type='news')
    return render(request, 'news_page.html', {'blogs': blogs, 'news': news})

def blog_page(request):
    # Fetch blogs and news from the database
    blogs = Post.objects.filter(content_type='blog')
    news = Post.objects.filter(content_type='news')
    return render(request, 'blog_page.html', {'blogs': blogs, 'news': news})

def product_list(request):
    return render(request,'product_list_page.html')

def product_detail(request):
    return render(request,'product_detail.html')

def contact_page(request):
    return render(request,'contact_page.html')

def issue_list(request):
    return render(request,'issue_list_page.html')

def services_location(request):
    return render(request,'service_location.html')


def blog_detail(request, pk):
    blog = get_object_or_404(Post, pk=pk)
    return render(request, 'blog_detail.html', {'blog': blog})

def article_detail(request, pk):
    article = get_object_or_404(Post, pk=pk, content_type='news')
    return render(request, 'article_detail.html', {'article': article})

def doc_download(request):
    return render(request,'document_download_page.html')

def doc_request(request):
    return render(request,'document_request.html')

def inquiry_page(request):
    return render(request,'inquiry_page.html')