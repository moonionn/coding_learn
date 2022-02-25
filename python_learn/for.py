# for 迴圈

# for 變數 in 字串or列表
#   要重複執行的程式碼


from email.mime import base


for letter in "小白你好":
    print(letter)

for num in [0,1,2,3,4]:
    print(num)
for num in range(5):
    print(num)          #range(5)=0~4，執行5次
for num in range(2,7):  #range(2,7)=2~6，執行5次([2]~[7])
    print(num)

print(pow(2,5))


# 2*2*2*2*2
def power(base_num, pow_num):
    result = base_num
    for index in range(pow_num-1):  #執行次數(pow_num-1)次，乘4次
        result = result * base_num  #2*2迴圈
    return result
print(power(2,5))