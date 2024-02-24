from django.db import models

class Post(models.Model):
    CONTENT_TYPES = (
        ('blog', 'Blog'),
        ('news', 'News'),
    )

    title = models.CharField(max_length=100)
    featured_image = models.ImageField(upload_to='blog_images/')
    content = models.TextField()  # Changed from RichTextField to TextField
    author_name = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    content_type = models.CharField(max_length=4, choices=CONTENT_TYPES, default='blog')

    def is_blog(self):
        return self.content_type == 'blog'

    def is_news(self):
        return self.content_type == 'news'
