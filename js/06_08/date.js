var d = new Date(),
    h = d.getHours(),
    m = d.getMinutes(),
    s = d.getSeconds(),

var h12 = (h>12) ? (h-12):h;

var ampm = (h<12)? "오전":"오후";

var min_0 = (m<10)? "0":"";
var sec_0 = (s<10)? "0":"";

var time = ampm+ " " +h12+ ":"+ min_0 +m+ ":" + sec_0+s;

var year = d.getFullYear();
    month = d.getMonth();
    date = d.getDate();
    day = d.getDay();

//요일을 판단

switch (day) {
    case 0: var dd = "일";break;
    case 1: var dd = "월";break;
    case 2: var dd = "화";break;
    case 3: var dd = "수";break;
    case 4: var dd = "목";break;
    case 5: var dd = "금";break;
    case 6: var dd = "토";break;

    default:
        break;
}
document.write(year + "년");
document.write((month+1) + "월");
document.write(date + "일");
document.write(dd + "요일<br>");