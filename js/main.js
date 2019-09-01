$(function(){
	
	//언어 선택 - 슬라이드 다운
	var $lang = $('header .util .lang');
	
	$lang.click(function(){
		$(this).find('ul').toggleClass('active');
	});
	
//	//GNB - 슬라이드 다운
//	var $gnbBox = $('#gnb .gnb_box');
//	
//	$gnbBox.mouseout(function(){
//		$(this).slideUp();
//	});
	
	//비주얼 - 컨텐츠
	var $visualCont = $('.visual_content .cont_box'),
		currentIndex = 0,
		contCount = $visualCont.length;
	
	$visualCont.eq(currentIndex).addClass('on');
	
	function showNextCont(){
		var nextIndex = (currentIndex + 1) % contCount;
		
		$visualCont.eq(currentIndex).removeClass('on');
		$visualCont.eq(nextIndex).addClass('on');
		currentIndex = nextIndex;
	}
	setInterval(showNextCont, 5000);
	
	//비주얼 - 이미지
	var $visualImg = $('.visual_img');
	
	$visualImg.addClass('on');
	
	//뉴스레터 - 슬라이드
	$('.news .big-slide').slick({
		asNavFor: '.news .small-slide',
		slidesToShow: 1,
		arrows: false,
		fade: true,
		speed: 1000
	});
	$('.news .small-slide').slick({
		asNavFor: '.news .big-slide',
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000
	});
	
	//뉴스 및 공지 - 슬라이드
	$('.noti_slide').slick({
		centerMode: true,
		centerPadding: '0px',
		variableWidth: true,
		slidesToShow: 3,
		slidesToScroll: 1,
//		speed: 1000,
		autoplay: true,
		autoplaySpeed: 2500,
		prevArrow: '.notice .control .prev',
		nextArrow: '.notice .control .next'
	});
	
	//퀵 메뉴 - 페이드 효과
	var $sideBar = $('#side-bar')
	
	$(window).scroll(function(){
		if($(this).scrollTop() >= 500){
			$sideBar.addClass('active');
		} else{
			$sideBar.removeClass('active');
		}
	});
		
	//Back to Top 버튼
	var $toTop = $('#side-bar .back-to-top');
	
	$toTop.click(function(e){
		e.preventDefault();
		$('html, body').stop().animate({scrollTop:0},400);
	});
	
});




