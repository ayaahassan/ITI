from django.urls import path
from .views import todo_home, todo_json, todo_list,todo_detail,todo_done,todo_delete,todo_update
app_name = 'todo'

urlpatterns = [
    path('list', todo_list, name='list'),
    path('detail/<str:todo_name>', todo_detail,name='detail'),
    path('done/<str:todo_name>', todo_done, name='done'),
    path('delete/<str:todo_name>', todo_delete, name='delete'),
    path('update/<str:todo_name>', todo_update, name='update'),
    path('home/json', todo_json, name='home_json'),
    path('home/<str:todo_name>', todo_home, name='home')
]


# reverse('todo:home')->/todo/home
