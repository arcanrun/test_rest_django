from django.shortcuts import render
from .models import Post
from django.http import JsonResponse
import json
from django.views.decorators.csrf import ensure_csrf_cookie

from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from .serializers import UserSerializer, GroupSerializer, PostsSerializer


class PostViewSet(viewsets.ModelViewSet):
    queryset = Post.objects.all()
    serializer_class = PostsSerializer

class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

# @ensure_csrf_cookie
def add_post(request):
    req = json.loads(str(request.body, encoding='utf-8'))
    text = req['text']
    title = req['title']

    post = Post(title=str(title), text=str(text))
    post.save()
    return JsonResponse({'USE POST': 200})

def get_posts(request):


    all_data = Post.objects.all()

    response_data = {'test': 'worked'}


    try:
        for field in all_data:
            response_data[field.id] = {
               "title": field.title,
               "text": field.text
          }
        response_data['status'] = 200
    except:
        response_data['status'] = 505



    return JsonResponse(response_data)




