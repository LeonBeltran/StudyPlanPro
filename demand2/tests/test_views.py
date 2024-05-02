from django.test import TestCase, Client
from django.urls import reverse
"""
class TestViewsDemand(TestCase):
    def setUp(self):
        self.client = Client()
    
    def test_demand_GET(self):
        response = self.client.get(reverse('demand'))
        print('demand_GET ' + str(response.status_code))
        
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'demandpage.html')
"""