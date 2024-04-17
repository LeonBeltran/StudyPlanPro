from django.test import SimpleTestCase
from django.urls import reverse, resolve
from home.views import view_home, view_join, view_login, view_logout

class TestUrls(SimpleTestCase):
    def test_home(self):
        url = reverse('home')
        print(resolve(url))
        self.assertEquals(resolve(url).func, view_home)
        
    def test_join(self):
        url = reverse('join')
        print(resolve(url))
        self.assertEquals(resolve(url).func, view_join)
        
    def test_login(self):
        url = reverse('login')
        print(resolve(url))
        self.assertEquals(resolve(url).func, view_login)
    
    def test_logout(self):
        url = reverse('logout')
        print(resolve(url))
        self.assertEquals(resolve(url).func, view_logout)