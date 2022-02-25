//製作一個問答程式

var questions = [
    {
        prompt:"香蕉是甚麼顏色? \n(a)紅色\n(b)綠色\n(c)黃色\n",
        answer:"c"
    },
    {
        prompt:"草莓是甚麼顏色? \n(a)紅色\n(b)紫色\n(c)黃色\n",
        answer:"a"
    },
    {
        prompt:"1公尺等於幾公分? \n(a)1\n(b)10\n(c)100\n",
        answer:"c"
    }
]
var score = 0;
for(var i=0;i<questions.length;i++){
    var input = prompt(questions[i].prompt);    //使用者輸入
    if(input==questions[i].answer){
        score++;
        alert("答對了");
    }else{
        alert("答錯了");
    }
}
alert("總共答對了" + score + "題");