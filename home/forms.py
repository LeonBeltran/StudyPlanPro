# Authentication
from django import forms
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth.models import User
# Other databases needed
from .models import Student

class JoinForm(UserCreationForm):
    email = forms.EmailField(widget=forms.EmailInput(attrs={'class':'loginInput','placeholder':'UP Email Address'}))
    
    class Meta:
        model = User
        fields = ('username', 'email', 'password1', 'password2')
        
    def __init__(self, *args, **kwargs):
        super(JoinForm, self).__init__(*args, **kwargs)
        
        for fieldname in ['username', 'email', 'password1', 'password2']:
            self.fields[fieldname].label = 'Required'
        
        self.fields['username'].widget.attrs['class'] = 'loginInput'
        self.fields['username'].widget.attrs['placeholder'] = 'Username'
        self.fields['username'].help_text = None
        
        self.fields['password1'].widget.attrs['class'] = 'loginInput'
        self.fields['password1'].widget.attrs['placeholder'] = 'Password'
        
        self.fields['password2'].widget.attrs['class'] = 'loginInput'
        self.fields['password2'].widget.attrs['placeholder'] = 'Confirm Password'
        self.fields['password2'].help_text = None

class StudentForm(forms.ModelForm):
    class Meta:
        model = Student
        fields = ['name', 'email']