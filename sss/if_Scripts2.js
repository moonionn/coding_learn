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