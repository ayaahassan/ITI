from rest_framework.permissions import BasePermission


class CheckGroup(BasePermission):
    def has_permission(self, request, view):
          for groupp in request.user.groups.all():
            print("group", groupp)

        if request.user.groups.filter(name='Developer').exists():
            return True
        return False
