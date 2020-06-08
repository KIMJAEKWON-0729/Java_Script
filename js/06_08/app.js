//날짜 변수 2016년 7월
var new_year = 2016, new_month = 6,
d = new Date(new_year,new_month,1),
d_length = 32-new Date(new_year,new_month,32).getDate(),
year = d.getFullYear(),


month = d.getMonth(),
date = d.getDate(),
day = d.getDay();

var caption_year = document.querySelector('.year'),
    caption_month = document.querySelector('.month');
var start_day = document.querySelector('tr td');

for(var i = day; i <day+d_length; i++){
    start_day[i].innerHEML = date;
    date++;
}

//caption 연도 월 표시

caption_year.innerHTML =year;

caption_month.innerHTML = month+1;