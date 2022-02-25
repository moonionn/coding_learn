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



function max_num(maxnum1, maxnum2, maxnum3){
    if(maxnum1>=maxnum2 && maxnum1>=maxnum3){
        return maxnum1;
    }else if(maxnum2>=maxnum1 && maxnum2>=maxnum3){
        return maxnum2;
    }else{
        return maxnum3;
    }
}
document.write(max_num(2, 3, 5));