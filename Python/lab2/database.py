import mysql.connector
class database:
        def __init__(self):
            self.mydb = mysql.connector.connect(
              host="localhost",
              user="root",
              password="12345678",
              database='python_course'
            )
            self.cur = self.mydb.cursor()
            self.cur.execute('''create table IF NOT EXISTS employee(
                        id int primary key not null AUTO_INCREMENT,
                        full_name text  not null,
                        sleep_mood text  null,
                        email char(50) null,
                        workmood char(50) null,
                        money int null,
                        salary int null,
                        is_manager int null,
                        office_id int
                        );''')
                        
        def insert_employee(self,name,salary,is_manager,office):
            sql="Insert into employee(full_name, salary, is_manager,office_id)values(%s,%s,%s,%s)"
            val=(name,salary,is_manager,office)  
            self.cur.execute(sql, val)
            self.mydb.commit() 
        def get_employee(self,id):
            self.cur.execute(f'select * from employee where id={id}')  
            row=self.cur.fetchall() 
            print(row)  
        def get_AllEmployees(self):
            self.cur.execute('select * from employee')
            rows = self.cur.fetchall()
            for row in rows:
              print(row)      
        def __del__(self):
            self.mydb.close()
        
     


            



