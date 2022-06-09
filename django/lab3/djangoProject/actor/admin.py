from django.contrib import admin
from .models import Actor

@admin.register(Actor)
class ActorAdmin(admin.ModelAdmin):
    list_display = ['name','gender','my_custom_function_field']
    search_fields = ['name',]
    list_filter = ('gender',)
    fieldsets = (
        ('Main Section', {'fields': ['name', 'gender']}),
        ('secondary Section', {'fields': ['age',]}),
        ('others', {'fields': ['nationality']}),
    )
      
    def my_custom_function_field(self, obj):
        movies_count =  obj.movie_set.all().count()
          
        return movies_count

    my_custom_function_field.short_description = 'Total movies'

    def has_delete_permission(self, request, obj=None):
        if request.user.is_superuser:
            return True
        return False

    def has_add_permission(self, request):
        return False

    