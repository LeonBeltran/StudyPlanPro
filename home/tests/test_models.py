from django.test import TestCase
from home.models import Course, CourseReview, Student

class TestCourse(TestCase):
    def setUp(self):
        self.course = Course.objects.create(
            courseCode='Test 101',
            courseTitle='Test Title',
            shortDescription='Test Description',
        )
    
    def test_reference(self):
        self.assertEquals(str(self.course), 'Test 101')
        
    def test_setup(self):
        self.assertEquals(self.course.courseCode, 'Test 101')
        self.assertEquals(self.course.courseTitle, 'Test Title')
        self.assertEquals(self.course.shortDescription, 'Test Description')
    
    def test_defaults(self):
        self.assertEquals(self.course.nominalCourseDifficultyReview, 3)
        self.assertEquals(self.course.courseDemand, 0)
        
class TestStudent(TestCase):
    def setUp(self):
        self.student = Student.objects.create(
            name='Bob',
            email='bob@up.edu.ph'
        )
    
    def test_reference(self):
        self.assertEquals(str(self.student), 'bob@up.edu.ph')
        
    def test_setup(self):
        self.assertEquals(self.student.name, 'Bob')
        self.assertEquals(self.student.email, 'bob@up.edu.ph')
        
class TestCourseReview(TestCase):  
    def setUp(self):
        self.course = Course.objects.create(
            courseCode='Test 101',
            courseTitle='Test Title',
            shortDescription='Test Description',
        )
        self.courseReview = CourseReview.objects.create(
            course=self.course,
            courseReview='Test Review'
        )
    
    def test_setup(self):
        self.assertEquals(self.courseReview.course, self.course)
        self.assertEquals(self.courseReview.courseReview, 'Test Review')