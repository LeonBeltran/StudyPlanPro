from django.test import SimpleTestCase
from django.urls import reverse, resolve
from flowchart.views import view_flowchart, view_othercourses, view_recommendations, course_description, add_course_review

class TestUrls(SimpleTestCase):
    def test_flowchart(self):
        url = reverse('flowchart')
        # print(resolve(url))
        self.assertEqual(resolve(url).func, view_flowchart)
        
    # def test_othercourses(self):
    #     url = reverse('othercourses')
    #     # print(resolve(url))
    #     self.assertEqual(resolve(url).func, view_othercourses)
        
    def test_recommendations(self):
        url = reverse('recommendations')
        # print(resolve(url))
        self.assertEqual(resolve(url).func, view_recommendations)

    def test_course_description(self):
        url = reverse('course_description')
        # print(resolve(url))
        self.assertEqual(resolve(url).func, course_description)

    def test_add_course_review(self):
        url = reverse('add_course_review')
        # print(resolve(url))
        self.assertEqual(resolve(url).func, add_course_review)