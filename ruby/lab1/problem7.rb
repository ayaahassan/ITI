def sum (myArr)
    sum=0
    myArr.each do |value|
       
        sum+=value.to_i
    end    
    return sum    
end    

puts "enter the array"
arr=gets.split("")
puts sum(arr) 