class Person:
    def __init__(self,full_name,money,sleep_mood):
        self.full_name=full_name
        self.money=money
        self.sleep_mood=sleep_mood
        
    def sleep(self,rate):
        if(rate==7):
            return 'happy'
        elif(rate>7):
            return 'lazy'
        else:
            return 'tired'   

    def eat(self,meals):
        if(meals==3):
            self.health_rate=100
        elif(meals==2):
            self.health_rate=75     
        elif(meals==1):
            self.health_rate=50    
        else:
              raise Exception("Sorry, number of meals between 1 and 3")    

    def buy(self,items):
        
        if(self.money-items*10<0):
             raise Exception("Sorry,you don't have enough money")
        else:
            self.money-=items*10




   

