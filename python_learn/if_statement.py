# if判斷句

# 1.
# 如果 我肚子餓
#   我就去吃飯
hungry = True
if hungry:
    print("eat")

# 2.
# 如果 今天下雨
#   我就開車去上班
# 否則
#   我就走路去上班
rainy=True
if rainy:
    print("我就開車去上班")
else:
    print("我就走路去上班")

# 3.
# 如果 你考100分
#   我給你1000元
# 或是如果 你考80分以上
#   我給你500元
# 或是如果 你考60分以上
#   我給你100元
# 否則
#   你給我500元
score=100
if score==100:
    print("我給你1000元")
elif score>=80:
    print("我給你500元")
elif score>=60:
    print("我給你100元")
else:
    print("你給我500元")

# 4.
# 如果 你考100分 且 今天下雨
#   我給你1000元
# 否則
#   你給我100元
if score==100 and rainy:
    print("我給你1000元")
else:
    print("你給我100元")

# 5.
# 如果 你考100分 或 今天下雨
#   我給你1000元
# 否則
#   你給我100元
if score==100 or rainy:
    print("我給你1000元")
else:
    print("你給我100元")

# 6.
# 如果 你沒有考100分 或 沒有下雨
#   我給你1000元
# 否則
#   你給我100元
if score!=100 or not(rainy):
    print("我給你1000元")
else:
    print("你給我100元")


def max_num(num1, num2, num3):
    if num1>=num2 and num1>=num3:
        return num1
    elif num2>=num1 and num2>=num3:
        return num2
    else:
        return num3

print(max_num(40, 50, 30))
