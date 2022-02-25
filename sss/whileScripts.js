//while 迴圈

//只要符合小括號內條件，就會重複執行大括號內程式碼
var i = 5;
while(i<=5){
    document.write(i);
    document.write("o");
    i++;
}
document.write("<br/>");

//會先執行大括號內程式碼，再判斷是否符合條件
var j = 3;
do{
    document.write(j);
    document.write("o");
    j++;
}while(j<=5)