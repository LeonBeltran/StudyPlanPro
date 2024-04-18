from django.test import TestCase, Client
from django.urls import reverse
# from home.models import Course, CourseReview, Student
import json

class TestViewsFlowchart(TestCase):
    def setUp(self):
        self.client = Client()
        self.flowchart_url = reverse("flowchart")

    def test_flowchart_GET(self):
        response = self.client.get(self.flowchart_url)
        print("test_flowchart_GET", str(response.status_code))
        
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, "flowchartpage.html")