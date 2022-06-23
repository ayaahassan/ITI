require 'date'
module Mymodule
    class Person
        def initialize(fname="first",lname="last",DOB=Date.today,age=0)
            @fname=fname
            @lname=lname
            @DOB=Date::strptime(DOB, "%Y-%m-%d")
            @age=age
        end 
        
        def getPersonData
            puts "enter first name"
            @fname=gets.chomp 
            puts "enter last name"
            @lname=gets.chomp
            puts "enter Date Of Birth format yyyy-mm-dd"
            @DOB=gets.chomp
            @DOB=Date::strptime(@DOB, "%Y-%m-%d")
            now = Time.now.utc.to_date
            @age=now.year - @DOB.year - ((now.month > @DOB.month || (now.month == @DOB.month && now.day >= @DOB.day)) ? 0 : 1)
          
           
        end  
        
        def printPersonData
            puts "welcome #@fname #@lname\n
                  your age #@age\n"
        end    
    end    
end    