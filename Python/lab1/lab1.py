import math
import random
from collections import Counter
####################### problem1 #################
x1=float(input("enter x1 "))
y1=float(input("enter y1 "))
x2=float(input("enter x2 "))
y2=float(input("enter y2 "))
distance=math.sqrt(math.pow(x2-x1,2)+math.pow(y2-y1,2))
print(f'distance equal {distance}')
######################## problem2 ##################
Mylist=[1,2,2,3,2]
Filterlist=[]
[Filterlist.append(x) for x in Mylist if x not in Filterlist]
print(f'the filtered list={Filterlist}')
###################### problem3 ####################
first_string=input('enter the first string ')
second_string=input('enter the second string ')
first_length=len(first_string)
second_length=len(second_string)
print(f'{second_string}')
if first_length%2 == 0:
    first_front=first_string[0:first_length%2+1]
    first_back=first_string[first_length%2+1:]
else:
    first_front=first_string[0:first_length//2+1]
    first_back=first_string[first_length//2+1:]

if second_length%2 == 0:
    second_front=second_string[0:second_length%2+1]
    second_back=second_string[second_length%2+1:]
else:
    second_front=second_string[0:second_length//2+1]
    second_back=second_string[second_length//2+1:]
front=first_front+second_front
back=first_back+second_back
print(f'front : {front}\n back :{back}')    
###################### problem4 ####################
f=open("data.txt","r")
data=Counter(f.read().split()).most_common(20)
f.close()
result=[i[0] for i in data]
result=' '.join(result)
f2=open("common_words.txt","w")
for word in result:
        f2.write(word)
f2.close()

###########)########### problem5 ####################
input_string=input("enter your string: ")
vowels=['a','e','i','o','u']
result = [char for char in input_string if char.lower() not in vowels]
result = ''.join(result)
print(result)
###################### problem6 ####################
input_string=input("enter your string: ")
input_char=input("enter your character: ")
result = [idx for idx,x in enumerate(input_string) if x.lower() == input_char.lower()]
print(result)

###################### bonus ####################
i=0
d=[]
win=0
lose=0
games=0
while(True):
    print("welcome.......")
    print(f'you played {games} times , win {win} times and lose {lose} times\n')
    n = random.randint(0,100)
    while(i<10):
        number=int(input('guess the number'))
        print(n)
        if(number>100):
            print('not allowed number bigger than 100')
            i-=1
        elif(number in d):   
            print('you entered this number before') 
            i-=1
        elif(number>n):
            print('bigger than the number')
            d.append(number)
            i+=1
        elif(number<n):
            print('lower than the number')
            d.append(number)
            i+=1
        elif(number==n):
            print('congratulation')
            win+=1
            games+=1
            break 
        elif(i==9):
            lose+=1  
            games+=1 
            i+=1
    loop=input('do you want to play again y/n')
    if(loop=='y'):
        i=0
    else:   
        break 













    