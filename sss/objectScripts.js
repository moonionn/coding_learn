//物件 object
// key value
// 鍵   值

var person = {      //person為鍵(key)，存放以下三個值(value)
    name:"宜君",    //存放String     |
    age:23,        //存放var         |      皆為value   
    is_female:true, //存放boolean    |

    print_name:function(){  //製作function，名為print_name
        document.write(this.name + "<br/>");  //this代表這個function屬於這個person的(this.name=person.name)
    }
};

document.write(person.name);
document.write(person.age);
document.write(person.is_female);
person.print_name();    //呼叫person中名為print_name的function


//真實世界物件

var movie = {
    title:"刻在你心底的名字",
    maker:"氧氣電影",
    duratiom:114,
    actors:[
        {
            name:"陳昊森",
            age:24,
            is_male:true,
        },
        {
            name:"曾敬驊",
            age:23,
            is_male:true,
        }
    ]
};
document.write(movie.title + "<br/>");
document.write(movie.duratiom + "<br/>");
document.write(movie.actors[0].name + "<br/>");