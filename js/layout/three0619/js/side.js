
    // API 요청 URL 변수
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=masan&APPID=e11462160015cffa69954c9f67741b7b';

    // 로딩 이미지 표시
    $('#weather_info .load_img').show();

    $.getJSON(url, function (data) {

        // 날씨 데이터 객체
        var sys = data.sys; 			// 국가명, 일출/일몰			
        var city = data.name; 			// 도시명
        var weather = data.weather; 	// 날씨 객체
        var main = data.main;  			// 온도 기압 관련 객체

        var wmain = weather[0].main; 	// 구름 상태(Cloudiness)
        var w_id = weather[0].id; 		// 날씨상태 id 코드
        var icon = weather[0].icon;		// 날씨 아이콘 정보
        var country = sys.country;  	// 국가명
        var temp = main.temp; 			// 현재 온도
        var temp_min = main.temp_min 	// 최저 온도
        var temp_max = main.temp_max 	// 최고 온도

        // 날씨 아이콘
        var icon_url = 'http://openweathermap.org/img/w/' + icon;

        // 날씨 정보 표시
        $('#weather_info > .city').html(city + "/" + country);
        $('#weather_info  .icon').html("<img src='" + icon_url + ".png'>");
        $('#weather_info .w_id').html(wmain);
        $('#weather_info .temp_min').html(parseInt(temp_min - 273.15) + '&deg;' + ' min');
        $('#weather_info .temp_max').html(parseInt(temp_max - 273.15) + '&deg;' + ' max');
        $('#weather_info  .temp').html(parseInt(temp - 273.15) + '&deg;');

        // 데이터 로딩 후 로딩이미지 제거
        $('#weather_info .load_img').hide();

    })	// end getJSON()
        .fail(function () {
            // 오류 메시지
            alert("loding error");
        });


    function initMap() {
        // 맵 객체를 생성하고 id=‘map’ 에 지도 표시
        var map = new google.maps.Map(document.getElementById('map'), {
            center: { lat: 35.219694, lng: 128.586617 },
            scrollwheel: false,
            zoom: 17
        });

        // 마커 객체 생성
        var marker = new google.maps.Marker({
            map: map,
            position: { lat: 35.219694, lng: 128.586617 },
            title: '환영합니다!'
        });

        // 정보창 객체를 추가
        var infoWindow = new google.maps.InfoWindow({ map: map });
        var my_position = { lat: 35.219694, lng: 128.586617 };

        infoWindow.setPosition(my_position);
        infoWindow.setContent('환영합니다!');

    }	// end initMap();


    //------side navigation-----//
    function openNav() {
        document.getElementById("mySidenav").style.width = "370px";
      }
      
      function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }