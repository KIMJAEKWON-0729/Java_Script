var banner = document.getElementById('banner');
var img = document.getElementsByTagName('img');
var toggle = document.getElementById('toggle');
var sound_btn = document.getElementById('sound_btn');

var banner_height = getComputedStyle(banner).height;
var cast = [];

function set_balloon(num){
    //풍선의 속성 값을 랜덤으로 생성
    var x = Math.floor(Math.random() *(500-10) +10),  //10에서 500사이의 값
        y = Math.floor(Math.random() * (400-120)+120),
        size = Math.floor(Math.random() *(200-100)+100),
        angle = Math.floor(Math.random() *(360-0) +0),
        speed = Math.random() *(2-0)+0;

    //풍선 객체
    cast[num] = {
        x:x,
        y:-y,
        size:size,
        angle:angle,
        speed:speed
    };

}

//풍선 객체 초기화 함수 
function ball_init() {
    for(var i = 0; i<img.length; i++){
        set_balloon(i);
        img[i].style.left ='-9999px';
        img[i].style.top = '-9999px';
    }
    
}


function animate_balloon() {
    for(var i = 0; i<img.length;i++){
        //풍선 속성 변경
        img[i].style.left = cast[i].x+'px';
        img[i].style.top = cast[i].y +'px';
        img[i].style.transform = 'rotate(' +cast[i].angle+ 'deg)';
        //풍선이 화면안에 있으면 
        if (cast[i].y <parseInt(banner_height)){
            cast[i].y += 1+cast[i].speed;
            cast[i].angle += cast[i].speed;
            
        } else {
            set_balloon(i);
            
        }
    }
    
}// end move_ballon

ball_init();
setInterval(function () {animate_balloon();
    
},1000/30)

