"""
Before pushing, run 'python manage.py test'
"""

from django.urls import reverse

from rest_framework import status
from rest_framework.test import APITestCase

from .models import Projectile

class ProjectileTests(APITestCase):
    def create_projectile(self, bounce_height):

        number_of_projectiles = Projectile.objects.count()
        url = reverse("create_projectile")
        data = {
            "acceleration": 3.52,
            "hang_time": 1002.3,
            "bounce_height": bounce_height,
        }
        response = self.client.post(url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Projectile.objects.count(), number_of_projectiles + 1)
        identity = response.data.get("identity")
        projectile = Projectile.objects.get(identity=identity)
        self.assertEqual(float(projectile.acceleration), 3.52)
        self.assertEqual(float(projectile.hang_time), 1002.3)
        self.assertEqual(float(projectile.bounce_height), bounce_height)
        return identity

    def get_projectile(self, identity, bounce_height):

        url = reverse("projectile/<identity>", kwargs={"identity": identity})
        response = self.client.get(url, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data.get("bounce_height"), bounce_height)

    def delete_projectile(self, identity):

        url = reverse("projectile/<identity>", kwargs={"identity": identity})
        response = self.client.delete(url, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        try:
            Projectile.objects.get(identity=identity)
            self.assertFalse(True)
        except:
            pass

    def edit_projectile(self, identity):

        url = reverse("edit_projectile/<identity>", kwargs={"identity": identity})
        new_identity = "#ItMustWork"
        data = {"identity": new_identity}
        response = self.client.put(url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        projectile = Projectile.objects.get(identity=new_identity)
        try:
            Projectile.objects.get(identity=identity)
            self.assertFalse(True)
        except:
            return new_identity

    def get_projectiles(self, winner_identity):

        url = reverse("projectiles")
        response = self.client.get(url, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data[0].get("identity"), winner_identity)

    def delete_projectiles(self):

        url = reverse("projectiles")
        response = self.client.delete(url, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(Projectile.objects.count(), 0)

    def testProjectiles(self):
        winner_identity = self.create_projectile(302.5)
        loser_identity = self.create_projectile(302.4)
        self.get_projectile(winner_identity, 302.5)
        self.delete_projectile(loser_identity)
        loser_identity = self.create_projectile(302.4)
        loser_identity = self.edit_projectile(loser_identity)
        self.get_projectiles(winner_identity)
        self.delete_projectiles()
