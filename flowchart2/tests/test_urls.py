from django.test import SimpleTestCase
from django.urls import reverse, resolve
from flowchart2.views import view_flowchart, view_othercourses, view_recommendations

class TestUrls(SimpleTestCase):
    def test_flowchart(self):
        url = reverse('flowchart2')
        # print(resolve(url))
        self.assertEqual(resolve(url).func, view_flowchart)
        
    def test_othercourses(self):
        url = reverse('othercourses2')
        # print(resolve(url))
        self.assertEqual(resolve(url).func, view_othercourses)
        
    def test_recommendations(self):
        url = reverse('recommendations2')
        # print(resolve(url))
        self.assertEqual(resolve(url).func, view_recommendations)
