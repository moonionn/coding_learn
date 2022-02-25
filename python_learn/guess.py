# 猜數字遊戲

secret_num = 77
guess = None
count = 0
guess_limit =3
out_of_limit = False

while secret_num!=guess and not(out_of_limit):
    count+=1
    if count<=guess_limit :
        guess = int(input("請輸入數字:")) 
        if guess > secret_num:
            print("小一點")
        elif guess < secret_num:
            print("大一點")
    else:
        out_of_limit=True

if out_of_limit:
     print("失敗")
else:
    print("猜對了")