var yao = 1;    
var sum = 0;
var b = true;
var t =true;
var bool = 0;
var time;

var password = 'dove'; // 密码

var dui = true;
function wenti() {
    while(dui) {
        let prop = prompt('我在看某人的照片。如果我没有兄弟姐妹，照片上的这个人的父亲是我父亲的儿子。那我在看的这张照片是谁呢？');
        if (prop == '我儿子' || prop == '孩子' || prop == '本人孩子' || prop == '儿子' || prop == '我孩子' || prop == '我的儿子' || prop == '我的孩子' || prop == '本人儿子' ) {
            alert('恭喜答对，六个核桃还是没有白吃的！！！');
            dui = false;
            document.getElementById('d5').style.display = 'block';
        }else{
            alert('错了。 继续！！！！');
        }
    }
}

function houmeng() {
    let prop = prompt('走后门的东西有没有？');
    if ( prop == password) {
        alert('欢迎VVVVVVVVVVIP,  10个V的那种！！！ ');
        showvideo();
    }else{
        alert('没东西就乖乖走大门呀！ 小妹！！！！');
        wenti();
    }
}
houmeng();


function one() {
    yao = 3;
}

function tow() {
    yao = 2;
}

function three() {
    yao = 1;
}

function my() {
    if (sum >= 5 && sum <= 10) {
        document.getElementById('d1').innerHTML = '要是觉得难，可以换个简单的，点击下面按钮';
        document.getElementById('bot2').style.display = 'inline-block';
    }else if(sum >= 10) {
        document.getElementById('d1').innerHTML = '要是觉得难，可以再简单一点';
        document.getElementById('bot1').style.display = 'inline-block';
        document.getElementById('bot3').style.display = 'inline-block';
    }
    if (yao == 1) {
        var arr1 = ['我' ,'你' ,'♥', '要' , '就' , '呵' , '哒' ];
    }else if(yao == 2) {
        var arr1 = ['我' ,'你' ,'♥' ];
    }else{
        var arr1 = ['♥'];
    }
    bool = 0;
    for(var i=0;i<3;i++){
        var span = document.createElement('span');
            span.style.position = 'absolute';
        var n =Math.floor( Math.random()*arr1.length );    
            span.innerHTML = arr1[n] ;
            if (arr1[n] == '♥') {
                bool++;
            }
            span.style.width = '100%';
            span.style.left = '0';
            if(b===false){ span.className = 'animation';}
                else{span.className = 'animation-1';}
            document.getElementsByClassName('span')[ i ].appendChild( span )
            if(b==false){ clearInterval(time)}
    }   
    if(b===false){ clearInterval(time)}
} 

function sss(i) {
    if( i == 1){
        b=false;
        t=true;
       setTimeout(()=>{
        if (bool == 3) {
            nexts();
        }
       },15000)
       return;
    }
   if( t==true ) {
        sum++;
        time = setInterval(my, 100);
        t=false;
        b=true;
        var span = document.getElementsByClassName('span');
        for(var i = 0;i<span.length;i++){
            span[i].innerHTML='';
        }
    }
}

function nexts() {
    document.getElementById('d2').innerHTML = '终于摇到了，不容易！！！！！！！';
    document.getElementById('d2').style.color = 'red';

    setTimeout(()=>{
        log();
    },3000)
}

function spanhiden() {
    document.getElementById('d5').style.display = 'none';
    document.getElementById('d3').style.display = 'block';
}

function log() {
    document.getElementById('d3').style.display = 'none';
    document.getElementById('d7').style.display = 'block';
    setTimeout(()=>{
        document.getElementById('d7').style.display = 'none';
        document.getElementById('d6').style.display = 'block';
    },4000)
}


function showvideo() {
    document.getElementById('d6').style.display = 'block';
    let show = document.getElementById('d5').style.display;
    document.getElementById('d4').style.display = 'none';
    document.getElementsByClassName('span1')[0].style.display = 'none';
    if (show == 'none') {
        document.getElementById('d5').style.display = 'block';
    }else{
        document.getElementById('d5').style.display = 'none';
    }
    
}