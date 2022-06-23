class Maths

    def initialize; end

    def calc (num1,num2,operator)

        if num1.is_a?(Numeric) && num1.is_a?(Numeric) 
           if ["+","-","*","/"].include? operator 
           case operator
           when "+" 
               return num1+num2
           when "-" 
                return num1-num2
           when "*" 
                return num1*num2
           when "/" 
                if num2==0
                    raise 'not valid divide by zero.'
                else 
                   return num1/num2
                end   
           end
        else
            raise 'not valid operator.'
        end 

      end   

    end
end

ob=Maths.new
begin
x=ob.calc(12,2,"/")
puts "Result #{x}"
rescue => e
    p e
end    
