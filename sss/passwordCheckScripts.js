//密碼檢驗程式
//(可讓使用者無限次數輸入密碼至正確為止)

var password = 123456;
var input;  //存放使用者輸入
var entry_times = 0;
var entry_limit = 3;
var out_of_limit = false;

while(password!=input && !out_of_limit){    //使用者沒有輸入正確的密碼 && 沒有超出輸入的次數(須達成兩項條件才能進入while迴圈)
    entry_times++;
    if(entry_times<=entry_limit){
        input=prompt("請輸入密碼");
    }else{
        out_of_limit=true;
    }
}

if(out_of_limit){
    alert("登入失敗");
}else{
    alert("登入成功");
}

/*
while(password!=input){
    input=prompt("請輸入密碼");
    times++;
    while(times>=3){
        alert("登入失敗");
    }
}
alert("登入成功");
*/