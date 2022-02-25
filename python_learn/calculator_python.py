# 建立基本計算機
from re import M


name = input("請輸入姓名:")
age = input("請輸入年紀:")
print("哈囉!" + name + "你今年" + age + "歲")

number1 = input("請輸入數字1:")
number2 = input("請輸入數字2:") #資料型態為字串
print(int(number1) + int(number2))  #用int()將資料型態轉為數字，如有小數點則用float()