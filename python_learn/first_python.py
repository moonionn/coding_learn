# 函式 function

from cmath import phase


phrase = "Hello World"
print(phrase.lower())   #小寫
print(phrase.upper())   #大寫
print(phrase.isupper()) #判斷字母是否全為大寫
print(phrase.islower()) #判斷字母是否全為小寫
print(phrase.lower().islower()) #先變小寫，判斷字母是否全為小寫

print(phrase[1])    #字串位置 (同於java的charAt())
print(phrase.index("H"))    #找尋字串的位置 (同於java的indexOf())，如有一樣的字串則傳回最前面的位置
print(phrase.replace("H","h"))  #替換位置  

from math import *
# 如何使用數字、數字的用法
print(-77.2)
print(8/5)
print(8//5) #整數的除法使用 ' // '

number = 8
print(number*5)

print(str(number))  #轉換資料型態 (數字8轉為字串8)
print("會印出數字" + str(number))
#print(8 + str(number))  字串不能與數字相加

print(abs(-8))  #取絕對值
print(pow(2, 4))    #次方
print(max(8, 5, 6, 7, 9))   #取最大值
print(min(8, 5, 6, 7, 9))   #取最小值
print(round(4.4))  #四捨五入
print(floor(4.55))  #無條件捨去
print(ceil(4.55))   #無條件進位
print(sqrt(64)) #開根號
