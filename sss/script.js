//基本資料型態 & 變數 (註解筆記)

//[字串]
"小白"

//數字
87
160.58

//[布林值(boolean)]
true
false

//[變數]
/*變數命名規則：只能是'英文大小寫'或是'數字'或是'$'或是'_'的組合
開頭不能是數字*/

var my_name = "宜君";
    //(創造一個名為my_name的變數(容器)，將"宜君"置入此變數(容器))
var my_age = 21;
var my_height = 162;
var is_female = true;


document.write("有一個人叫" + my_name);
document.write("<br/>");
document.write(my_name + "今年" + my_age + "歲");
document.write("<br/>");
document.write(my_name + "身高" + my_height +"公分");
document.write("<br/>");
my_name = "MM"
document.write(my_name);
document.write("<br/>");
document.write("<br/>");




//[字串]
//如何使用字串、字串用法
var phrase = "hello Ms.M";
//            0123456789
var text = "哈哈"
document.write(phrase + text);
document.write("<br/>");
document.write(phrase.length + "<br/>");
document.write(phrase.toUpperCase() + "<br/>");
document.write(phrase.toLowerCase() + "<br/>");
document.write(phrase.charAt(1) + "<br/>");
document.write(phrase.indexOf("l") + "<br/>");
document.write(phrase.substring(0,5) + "<br/>");    //第0位-第5位之前 = 第0-第4位




//[數字]
//如何使用數字、數字的用法
document.write(-6.12215 + "<br/>");
document.write(2+3*8 + "<br/>");    //先乘除後加減
document.write((2+3)*5 + "<br/>");  //先算括號
var number = 6;
document.write((2+3)*number + "<br/>");
document.write(8%3 + "<br/>");
number = -6;
document.write(Math.abs(number));
document.write(Math.max(2,3,4,5,6,8788,555,4,64642,number) + "<br/>");
document.write(Math.min(number,15,2123,2223,0,66,) + "<br/>");
number = 2.9;
document.write(Math.round(number) + "<br/>");   //四捨五入
document.write(Math.pow(6,2) + "<br/>");    //次方
document.write(Math.sqrt(64) + "<br/>");    //根號
document.write(Math.random() * 10 + "<br/>");
document.write(Math.round(Math.random() * 10) + "<br/>");




//[製作基本計算機]
var my_calculator = prompt("請輸入您的名字");
var my_calculator_age = prompt("請輸入您的年紀");
document.write("你好啊，" + my_calculator + "！");
document.write("你今年" + my_calculator_age + "歲");
document.write("<br/>");

var num1 = prompt("請輸入數字1");
var num2 = prompt("請輸入數字2");   //num1, num2會被預設為字串來看
num1 = parseInt(num1);
num2 = parseInt(num2);  //Int為整數，如需小數點則用parseFloat()
document.write(num1 + num2 + "<br/>");




//[陣列]Array
var score1 = 80;
var score2 = 60;
var score3 = 40;
var score4 = 90;
var score5 = 70;

var scores = [80, 60, 40, 90, 70];
document.write(scores + "<br/>");
document.write(scores[0] + "<br/>");
scores[0]=20;
document.write(scores[0] + "<br/>");
var friends = ["小黑", "小黃", true];
document.write(friends + "<br/>");
document.write(friends.length + "<br/>"); //陣列中的值數量




//[函式]function
function hello(name, age){
    document.write("hello" + name + "你今年" + age + "<br/>");
}
hello("宜君", "21");    //呼叫函示

function add(num01, num02){
    //document.write(num01 + num02 + "<br/>");
    return num01 + num02;   //使用return覆蓋原先呼叫(add(8,6))，回傳add(14)
}
document.write(add(8,6) + "<br/>");
//大部分函示通常在運算完之後須將運算結果回傳回去，可能後續會有運算處理

//當函式一碰到return就會跳出函式，以下為舉例：
function add(num01, num02){
    return num01 + num02;
    document.write("你好"); //此行不會被執行，因上一行reutrn已跳出此函式
}
document.write(add(8,6) + "<br/>");

function add(num01, num02){
    document.write(num01 + num02);  //output:5
    document.write("<br/>");
    return 10;  //return 10，覆蓋原先呼叫並跳出此function
    document.write("你好");
}
value = add(3,2);   //偵測到，並跳到function add()，進行運算
document.write(value + "<br/>");    //output:10




//if判斷
/*
    1.
    如果 肚子餓
        我就去吃飯
*/
var hungry = true;
if(hungry){
    document.write("我就去吃飯" + "<br/>");
}

/*
    2.
    如果 今天下雨
        我就開車去上班
    否則
        我就走路去上班
*/
var rainy = true;
if(rainy){
    document.write("我就開車去上班" + "<br/>");
}else{
    document.write("我就走路去上班" + "<br/>");
}

/*
    3.
    如果 你考100分
        我給你1000元
    或是如果 你考80分以上
        我給你500元
    或是如果 你考60分以上
        我給你100元
    否則
        你給我300元
*/
var score = 100;
if(score==100){
    document.write("我給你1000元" + "<br/>");
}else if(score>=80){
    document.write("我給你500元" + "<br/>");
}else if(score>=60){
    document.write("我給你100元" + "<br/>");
}else{
    document.write("你給我300元" + "<br/>");
}

/*
    4.
    如果 你考100分 且 今天下雨
        我給你1000元
    否則
        你給我100元
*/
var scoreee = 100;
var rainyday = false;

if(score==100 && rainyday){
    document.write("我給你1000元" + "<br/>");
}else{
    document.write("你給我100元" + "<br/>");
}

/*
    5.
    如果 你考100分 或 今天下雨
        我給你1000元
    否則
        你給我100元
*/
var scoreeef = 90;
var rainydayf = false;

if(scoreeeef==100 || rainydayf){
    document.write("我給你1000元" + "<br/>");
}else{
    document.write("你給我100元" + "<br/>");
}

/*
    6.
    如果 你考100分 或 今天沒有下雨
        我給你1000元
    否則
        你給我100元
*/
var scoreeefa = 90;
var rainydayfa = true;

if(scoreeeefa==100 || !rainydayfa){
    document.write("我給你1000元" + "<br/>");
}else{
    document.write("你給我100元" + "<br/>");
}
