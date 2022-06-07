from django.shortcuts import render, HttpResponse,redirect,reverse
from django.http.response import JsonResponse
my_todos = {
    'one': { 'name' : 'breakfast' , 'priority' : 1 ,'is_done':False},
    'two': { 'name' : 'clean room' , 'priority' : 2 ,'is_done':False},
    'three': { 'name' : 'study' , 'priority' : 3 ,'is_done':False}
}

def todo_json(request):
    return JsonResponse(my_todos)

def todo_list(request):
    return render(request, 'todo/todo.html',context={'my_todos': my_todos})
def todo_detail(request,**kwargs):
    get_todo_name = kwargs.get('todo_name')
    todo_value = my_todos.get(get_todo_name)
    return render(request,'todo/todo_detail.html',context={'todo_detail':todo_value})
def todo_done(request,**kwargs):
    get_todo_name = kwargs.get('todo_name')
    todo_value = my_todos.get(get_todo_name)
    todo_value['is_done']=True
    return redirect(reverse('todo:list'))

def todo_delete(request,**kwargs):
    get_todo_name = kwargs.get('todo_name')
    todo_value=my_todos.get(get_todo_name)
    if todo_value.get('is_done'):
        my_todos.pop( get_todo_name)
    else:
        return render(request, 'todo/todo.html', context={'my_todos': my_todos,'warning_msg':"can't delete unfinished task"})
    return redirect(reverse('todo:list'))
def todo_update(request,**kwargs):
    target_todo_name = kwargs.get('todo_name')
    target_detail = my_todos.get(target_todo_name)
    return render(request, 'todo/todo_update.html', context={'my_todo': target_detail, 'task_key': target_todo_name})


def save_todo(request, **kwargs):
    task_name = kwargs.get('todo_name')
    my_target_todo = my_todos.get(task_name)
    my_target_todo['name'] = request.POST.get("name")
    my_target_todo['priority'] = request.POST.get("priority")
    my_target_todo['is_done'] = request.POST.get("is_done")
    return redirect(reverse('todo:list'))

def todo_home(request,**kwargs):
    get_todo_name = kwargs.get('todo_name')
    todo_value = my_todos.get(get_todo_name)
    return HttpResponse(f"hello {todo_value}")

# Create your views here.
