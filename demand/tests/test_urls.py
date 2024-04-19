from django.test import SimpleTestCase
from django.urls import reverse, resolve
from demand.views import view_demand

class TestUrls(SimpleTestCase):
    def test_demand(self):
        url = reverse('demand')
        print(resolve(url))
        self.assertEqual(resolve(url).func, view_demand)