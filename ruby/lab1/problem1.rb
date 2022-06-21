def charRepeater (str,n)
    puts str*n
end    


puts "enter your char"
str=gets.chomp
puts "enter repeated number"
num=gets
charRepeater(str,num.to_i)
