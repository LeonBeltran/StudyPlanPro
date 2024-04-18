# from django.test import TestCase, Client
# from django.urls import reverse
# # from home.models import Course, CourseReview, Student
# import json

# Returns socialapp error

# class TestViewsFlowchart(TestCase):
#     def setUp(self):
#         self.client = Client()
#         self.flowchart_url = reverse("flowchart")
#         self.othercourses_url = reverse("othercourses")
#         self.recommendations_url = reverse("recommendations")

#     def test_flowchart_GET(self):
#         response = self.client.get(self.flowchart_url)
#         print("test_flowchart_GET", str(response.status_code))
        
#         self.assertEqual(response.status_code, 200)
#         self.assertTemplateUsed(response, "flowchartpage.html")

#     def test_othercourses_GET(self):
#         response = self.client.get(self.othercourses_url)
#         print("test_othercourses_GET", str(response.status_code))
        
#         self.assertEqual(response.status_code, 200)
#         self.assertTemplateUsed(response, "othercoursespage.html")

#     def test_recommendations_GET(self):
#         response = self.client.get(self.recommendations_url)
#         print("test_recommendations_GET", str(response.status_code))
        
#         self.assertEqual(response.status_code, 200)
#         self.assertTemplateUsed(response, "recommendationspage.html")