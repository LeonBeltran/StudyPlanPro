from django.test import TestCase
from home.forms import JoinForm

class TestForms(TestCase):
    def test_joinform_valid(self):
        form = JoinForm(data={
            'username':'Bob',
            'email':'bob@up.edu.ph',
            'password1':'samplepassword',
            'password2':'samplepassword',
        })
        
        self.assertTrue(form.is_valid())
    
    def test_joinform_no_data(self):
        form = JoinForm(data={})
        
        self.assertFalse(form.is_valid())
    
    def test_joinform_invalid(self):
        form = JoinForm(data={
            'username':'Bob',
            'email':'bob@up.edu.ph',
            'password1':'samplepassword123',
            'password2':'samplepassword',
        })
        
        self.assertFalse(form.is_valid())