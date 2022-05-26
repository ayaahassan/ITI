from office import *

db=database()
office=Office('alex',db)
choose='n'
while(choose!='y'):
    print('----------------')
    emp_name=input('enter employee name')
    emp_salary=int(input('enter employee salary'))
    emp_is_manager=int(input('is employ manager?1/0'))
    emp=Employee(emp_name,emp_salary,1,1,emp_name+'@gmail.com',8,5000,emp_is_manager)
    office.hire(emp)
    choose=input('do you want to quit or add more?y/n ')

office.getAllEmployees()
office.getEmployee(1)

 