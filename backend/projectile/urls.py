from django.urls import path
from .views import (
    create_projectile,
    projectile,
    edit_projectile,
    projectiles,
)


urlpatterns = [
    path("create_projectile", create_projectile, name="create_projectile"),
    path("projectile/<identity>", projectile, name="projectile/<identity>"),
    path("edit_projectile/<identity>", edit_projectile, name="edit_projectile/<identity>"),
    path("projectiles", projectiles, name="projectiles"),
]
