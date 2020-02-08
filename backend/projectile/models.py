from django.db import models

class Projectile(models.Model):

    identity = models.CharField(max_length=10, unique=True)
    acceleration = models.DecimalField(max_digits=10, decimal_places=5)
    hang_time = models.DecimalField(max_digits=10, decimal_places=5)
    bounce_height = models.DecimalField(max_digits=10, decimal_places=5)
    score = models.DecimalField(max_digits=10, decimal_places=5)

    class Meta:
        ordering = ("identity",)

    def __str__(self):
        return "{}".format(self.identity)
