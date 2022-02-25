//for迴圈

var i = 0;
while(i<10){
    document.write(i);
    document.write("<br/>");
    i++;
}
document.write("<br/>");

//變數 ; 條件判斷 ; 每跑完一次迴圈需做的事
for(i=0;i<10;i++){
    document.write(i);
    document.write("<br/>");
}

var friends = ["小黑", "小黃", "小綠", "小蘭", "小菊"];
for(var q=0;q<friends.length;q++){
    document.write(friends[q] + "    ");
}