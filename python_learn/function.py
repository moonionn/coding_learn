# 函式 function
def hello():
    print("hello")
hello() #呼叫function hello()

def bello(name, age):
    print("bello" + name + "你今年" + str(age) + "歲")
bello("小白", 21)

def add(num1, num2):
    print(num1 + num2)
    return 10   #覆蓋原先呼叫並跳出function
print(add(10, 20))

def addd(num1, num2):
    return num1 + num2
print(addd(10, 20))

# test
def tryit(num1, num2):
    print(num1 + num2)  #output:7
    return 10   #覆蓋7，變為10
value = tryit(3, 4) #value=10
print(value)    #output:10

def tryitSec(num1, num2):
    print(num1 + num2)  #output:7
    return None   #覆蓋7，None
    print("你好")   #已在return跳出程式
value = tryitSec(3, 4) #value=None
print(value)    #output:None