def checkLeapYear(year)
    if year%4==0 || year%100!=0 && year%400==0
        puts "yes"
    else 
        puts "no"  
    end    
end

puts "enter the year"
year=gets.to_i
checkLeapYear(year)


