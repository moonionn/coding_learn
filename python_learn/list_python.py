# 列表 list
scores = [90, 70, 60, 50, 80]
friends = ["Noze", "Aiki", "Gabee", "Leejung"]
things = ["Noze", 520, True]
phrase = "Hello World"
print(scores)
print(friends)
print(things)

print(scores[0])    #scores list第0位
print(scores[-1])   #scores list倒數第1位，以此類推
print(scores[0:2])  #從第0位取到第2位(不包含第2位)，已就是[0]-[1]
print(scores[1:4])  #[1]-[3]
print(scores[1:])   #從第1位開始取到結束
print(scores[:4])   #從第4位往前取到結束(不包含第4位)

print(phrase[0:5])
scores[0] = 30
print(scores)

scores.extend(friends)  #scores list做延伸對象為friends list (scores list 後面加上 friends list)
print(scores)

scores.append(30)   #在後面新增資料
print(scores)

scores.insert(2, 30)   #在第2位前插入30 (原先60為第2位，現在30變第2位)，insert(位置, 值)
print(scores)

scores.remove(50)   #刪除資料
print(scores)

scores.clear()  #清空列表
print(scores)

scores = [90, 60, 30, 50, 40]

scores.sort()
print(scores)   #由小到大做排列

scores.pop()    #移除list最後一位
print(scores)

scores.reverse()    #反轉list
print(scores)

print(scores.index(40)) #找尋資料位置(同java indexOf())

print(scores.count(40)) #list中有幾筆資料

print(len(scores))