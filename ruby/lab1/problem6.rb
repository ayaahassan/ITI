def rotateLeft(myArray)
   return myArray.reverse.join("")
end

puts "enter your array"
arr=gets.chomp.split("")
print rotateLeft(arr)
