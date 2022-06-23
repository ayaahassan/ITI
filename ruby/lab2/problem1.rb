class User

    @@name = "user"

    def initialize(name="user")
        @name=name
    end 

    def getInstanceName
        @name
    end 

    def setInstanceName=(name)
        @name=name
    end   
    
    def self.setClassName=(name)

        @@name=name
       

    end  
    
    def self.getClassName
        @@name
    end    

end    

user=User.new  
user.setInstanceName="aya"
name=user.getInstanceName
className=User.getClassName
puts " name is #{name} \n class name #{className}"
User.setClassName="karim"
className=User.getClassName
puts " name is #{name} \n class name #{className}"
