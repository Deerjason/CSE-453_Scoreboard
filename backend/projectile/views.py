from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .models import Projectile
from .serializers import CreateProjectileSerializer


@api_view(["POST"])
def create_projectile(request):

    serializer = CreateProjectileSerializer(
        data={
            "acceleration": request.data.get("acceleration"),
            "hang_time": request.data.get("hang_time"),
            "bounce_height": request.data.get("bounce_height"),
        }
    )
    if serializer.is_valid():
        serializer.save()
        projectile = Projectile.objects.get(identity=serializer.data.get("identity"))
        content = {
            "identity": projectile.identity,
            "acceleration": float(projectile.acceleration),
            "hang_time": float(projectile.hang_time),
            "bounce_height": float(projectile.bounce_height),
            "score": float(projectile.score),
        }
        return Response(content, status=status.HTTP_200_OK)
    else:
        data = {"error": serializer.errors}
        return Response(data, status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET", "DELETE"])
def projectile(request, identity):

    try:
        projectile = Projectile.objects.get(identity=identity)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if request.method == "GET":
        content = {
            "identity": projectile.identity,
            "acceleration": float(projectile.acceleration),
            "hang_time": float(projectile.hang_time),
            "bounce_height": float(projectile.bounce_height),
            "score": float(projectile.score),
        }
        return Response(content, status=status.HTTP_200_OK)
    if request.method=="DELETE":
        projectile.delete()
        return Response(status=status.HTTP_200_OK)

@api_view(["PUT"])
def edit_projectile(request, identity):

    try:
        projectile = Projectile.objects.get(identity=identity)
    except:
        return Response(status=status.HTTP_404_NOT_FOUND)
    if "identity" in request.data:
        identity = request.data.get("identity")
        projectile.identity = identity
    if "acceleration" in request.data:
        projectile.score = projectile.score - projectile.acceleration/2
        acceleration = request.data.get("acceleration")
        projectile.acceleration = acceleration
        projectile.score = projectile.score + acceleration/2
    if "hang_time" in request.data:
        projectile.score = projectile.score - projectile.hang_time/2
        hang_time = request.data.get("hang_time")
        projectile.hang_time = hang_time
        projectile.score = projectile.score + hang_time/2
    if "bounce_height" in request.data:
        projectile.score = projectile.score - projectile.bounce_height
        bounce_height = request.data.get("bounce_height")
        projectile.bounce_height = bounce_height
        projectile.score = projectile.score + bounce_height
    projectile.save()
    content = {
            "identity": projectile.identity,
            "acceleration": float(projectile.acceleration),
            "hang_time": float(projectile.hang_time),
            "bounce_height": float(projectile.bounce_height),
            "score": float(projectile.score),
        }
    return Response(content, status=status.HTTP_200_OK)
    

@api_view(["GET", "DELETE"])
def projectiles(request):

    if request.method == "GET":
        projectiles = Projectile.objects.all().order_by("-score")
        content = []
        for projectile in projectiles:
            content.append({"identity": projectile.identity,
            "acceleration": float(projectile.acceleration),
            "hang_time": float(projectile.hang_time),
            "bounce_height": float(projectile.bounce_height),
            "score": float(projectile.score),})
        return Response(content, status=status.HTTP_200_OK)
    if request.method == "DELETE":
        Projectile.objects.all().delete()
        return Response(status=status.HTTP_200_OK)