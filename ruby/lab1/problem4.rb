puts "enter your string"
str=gets.chomp
result=str[-1]+str[0..-1]+str[-1]
puts result