from django.test import SimpleTestCase
from django.urls import reverse, resolve
from demand.views import view_demand

class TestUrls(SimpleTestCase):
    def test_flowchart(self):
        url = reverse('demand')
        print(resolve(url))
        self.assertEquals(resolve(url).func, view_demand)