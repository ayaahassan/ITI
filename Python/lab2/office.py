from Employee import *
from database import *

class Office:
    def __init__(self,name,database):
        self.name=name
        self.db=database

    def getAllEmployees(self):
        return self.db.get_AllEmployees() 

    def getEmployee(self,id):
        return self.db.get_employee(id)          

    def hire(self,employee):
        self.db.insert_employee(employee.full_name,employee.salary,employee.is_manager,1)

 




