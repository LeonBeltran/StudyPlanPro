from django.test import TestCase, Client
from django.urls import reverse
from home.models import Course, CourseReview, Student
import json

class TestViewsHome(TestCase):
    def setUp(self):
        self.client = Client()
    
    def test_home_GET(self):
        response = self.client.get(reverse('home'))
        print('home_GET ' + str(response.status_code))
        
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'homepage.html')
    
class TestViewsLogout(TestCase):
    def setUp(self):
        self.client = Client()
        
    def test_logout(self):
        response = self.client.get(reverse('logout'))
        print('logout ' + str(response.status_code))
        
        self.assertEqual(response.status_code, 302)
    
class TestViewsLogin(TestCase):
    def setUp(self):
        self.client = Client()
    
    # GET failing due to OAuth, unknown fix as of now
    # Apr 18 : Fixed by adding client id and secret id to google config in settings.py https://github.com/osc-vitap/oschub/issues/18
    # jk nvm!
    # def test_login_GET(self):
    #     response = self.client.get(reverse('login'))
    #     print('login_G ' + str(response.status_code))
        
    #     self.assertEqual(response.status_code, 200)
    #     self.assertTemplateUsed(response, 'loginpage.html')
    
    def test_login_POST_fail_email(self):
        response = self.client.post(reverse('login'), data={'email':'xxx@xxx.xxx', 
                                                       'username':'xxx', 
                                                       'password':'xxx'})
        print('login_email ' + str(response.status_code))
        self.assertEqual(response.status_code, 302)
        
    def test_login_POST_fail_credentials(self):
        response = self.client.post(reverse('login'), data={'email':'xxx@up.edu.ph', 
                                                       'username':'xxx', 
                                                       'password':'xxx'})
        print('login_POST ' + str(response.status_code))
        self.assertEqual(response.status_code, 302)
    
    def test_login_POST_success(self):
        response = self.client.post(reverse('login'), data={'email':'bob@up.edu.ph', 
                                                       'username':'Bob', 
                                                       'password':'djangopassword'})
        print('login_POST ' + str(response.status_code))
        self.assertEqual(response.status_code, 302)

class TestViewsJoin(TestCase):
    def setUp(self):
        self.client = Client()
        
    def test_join_GET(self):
        response = self.client.get(reverse('join'))
        print('join_GET ' + str(response.status_code))
        
        self.assertEqual(response.status_code, 200)
        self.assertTemplateUsed(response, 'joinpage.html')
    
    def test_join_POST_success(self):
        response = self.client.post(reverse('login'), data={'email':'xxx@up.edu.ph', 
                                                       'username':'xxx', 
                                                       'password':'samplepassword',
                                                       'password2': 'samplepassword'})
        print('success ' + str(response.status_code))
        
        self.assertEqual(response.status_code, 302)
    
    def test_join_POST_fail_email(self):
        response = self.client.post(reverse('login'), data={'email':'xxx@xxx.xxx', 
                                                       'username':'xxx', 
                                                       'password':'samplepassword',
                                                       'password2': 'samplepassword'})
        print('email ' + str(response.status_code))
        
        self.assertEqual(response.status_code, 302)
    
    def test_join_POST_fail_password(self):
        response = self.client.post(reverse('login'), data={'email':'xxx@up.edu.ph', 
                                                       'username':'xxx', 
                                                       'password':'xxx',
                                                       'password2': 'xxx'})
        print('password ' + str(response.status_code))
        
        self.assertEqual(response.status_code, 302)