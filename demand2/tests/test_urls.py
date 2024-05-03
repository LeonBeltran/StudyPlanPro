from django.test import SimpleTestCase
from django.urls import reverse, resolve
from demand2.views import view_demand

class TestUrls(SimpleTestCase):
    def test_demand(self):
        url = reverse('demand2')
        print(resolve(url))
        self.assertEqual(resolve(url).func, view_demand)