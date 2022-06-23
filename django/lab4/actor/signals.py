from django.dispatch import receiver
from django.db.models.signals import post_save, post_delete, pre_delete, pre_save

from .models import Movie

from todo.models import Todo


@receiver(post_save, sender=Movie)
def post_save_handler(*args, **kwargs):
    print(kwargs)
    if kwargs.get('created'):
        created_object = kwargs.get('instance')
        Actor.objects.create(name=f'Actor created ')