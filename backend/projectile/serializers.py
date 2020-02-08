from django.utils.crypto import get_random_string

from rest_framework import serializers

from .models import Projectile

class CreateProjectileSerializer(serializers.ModelSerializer):

    identity = serializers.CharField(max_length=10, read_only=True)

    def create(self, validated_data):
        id = get_random_string(10)
        count = 0
        try:
            while count <= 20:
                Projectile.objects.get(identity=id)
                id = get_random_string(10)
                count += 1
        except:
            acceleration = validated_data.get("acceleration")
            hang_time = validated_data.get("hang_time")
            bounce_height = validated_data.get("bounce_height")
            projectile = Projectile(
                identity=id,
                acceleration=acceleration,
                hang_time=hang_time,
                bounce_height=bounce_height,
                score=acceleration/2 + hang_time/2 + bounce_height,
            )
            projectile.save()
            return projectile

    class Meta:
        model = Projectile
        fields = ("identity", "acceleration", "hang_time", "bounce_height")
