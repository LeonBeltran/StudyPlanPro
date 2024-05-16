from django.test import SimpleTestCase
from django.urls import reverse, resolve
from demand.views import view_demand, course_description

class TestUrls(SimpleTestCase):
    def test_demand(self):
        url = reverse('demand')
        # print(resolve(url))
        self.assertEqual(resolve(url).func, view_demand)

    # def test_course_desc(self):
    #     url = reverse('course_description')
    #     # print(course_description, resolve(url).func)
    #     print(resolve(url))
    #     self.assertEqual(resolve(url).func, course_description)