from django.test import SimpleTestCase
from django.urls import reverse, resolve
from flowchart.views import view_flowchart, view_othercourses, view_recommendations

class TestUrls(SimpleTestCase):
    def test_flowchart(self):
        url = reverse('flowchart')
        print(resolve(url))
        self.assertEqual(resolve(url).func, view_flowchart)
        
    def test_othercourses(self):
        url = reverse('othercourses')
        print(resolve(url))
        self.assertEqual(resolve(url).func, view_othercourses)
        
    def test_recommendations(self):
        url = reverse('recommendations')
        print(resolve(url))
        self.assertEqual(resolve(url).func, view_recommendations)