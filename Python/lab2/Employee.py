import re
from Person import *


class Employee(Person):
    def __init__(self,full_name,money,sleep_mood,id, email, workmood, salary,is_manager):
        Person.__init__(self,full_name,money,sleep_mood)
        match="\w+@+\w+\.+[a-zA-Z]{2,}"
        test = re.match(match,email)
        self.id=id
        self.workmood=workmood
        self.is_manager=is_manager
        
        is_match = bool(test)
        if(test):
            self.email=email
        else:
            raise Exception("email is not valid")
        
        if(salary>=1000):
            self.salary=salary
        else:
            raise Exception("salary should be higher than 1000")
    def __str__(self):
        return f"name {self.full_name} id {self.id} email {self.email} workmood{self.workmood} salary{self.salary} manager:{self.is_manager}"

    def work(self,hours):
        if(hours==8):
            return 'happy'
        elif(hours<8):
            return 'lazy'
        else:
            return 'tired'

    def sendEmail(self,to,subject,body_name):
        f = open("email.txt", "w")
        f.write(f"to:{to}\nsubject:{subject}\n{body_name}")
        f.close()        
#emp=Employee('aya',2000,3,1,'aya@gmail.com',8,5000,0)
#emp.sendEmail('mariam','try','hello')
