let menu = document.querySelector('.burger');
if (menu) {
	menu.addEventListener('click', function(e) {
		e.preventDefault();
		document.querySelector('nav').classList.add('active');
	})
}

let close = document.querySelector('nav .close');
if (close) {
	close.addEventListener('click', function(e) {
		e.preventDefault();
		document.querySelector('nav').classList.remove('active');
	})
}


//EFECTO DE ALICK AL MENU
let itemMenu = document.querySelectorAll('header nav a');
if (itemMenu) {
	for (var i = 0; i <= itemMenu.length - 1; i++) {
		itemMenu[i].addEventListener('click', function(e) {
			$('nav').removeClass();
		});
	}
}



//REDIRECCION SUMMER
const summer = document.querySelector('.info-slider .estacion-principal');
if (summer) {
	summer.addEventListener('click', function(e) {
		e.preventDefault();
		window.location.href = '/buum2/summer.html';
	});
}


const info_slider = document.querySelectorAll('.info-slider ul li');
if (info_slider) {
	for (var i = 0; i <= info_slider.length - 1; i++) {
		info_slider[i].addEventListener('click', function(e) {
			e.preventDefault();
			let url = e.target.getAttribute('src');
			window.location.href = url;
		});
	}
}


//DETECTAR DISPOSITIVO MOBILE
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {

	//EFECTO EN MOBILE ----------------------------------------------------------------------------

	const hh2 = $('section.slider-bumming .info-slider h2.estacion-principal');
	if (hh2) {

		hh2.css('letter-spacing', '20px');
		hh2.css('display', 'inline-block');
		hh2.addClass('cambioSummer');
		$('.info-slider h2:first-child').css({
			'letterSpacing': '15px',
			'color': '#D24D39',
		});

		$('.imagen-slider.mobile figure.one-img').css('display', 'none');
		$('.imagen-slider.mobile figure.summer').css('display', 'block');
	}

	//EFECTO EN MOBILE\\ ------------------------------------------------------------------------------------
}
else {

	//EFECTO DESKTOP ESTACIONES  ----------------------------------------------------------------------------

	//EFECTO HOME H2 -(PRINCIPAL)
	$('section.slider-bumming .info-slider h2.estacion-principal').hover(function(){
		$(this).css('letter-spacing', '25px');
		$(this).css('display', 'inline-block');
		$(this).addClass('cambioSummer');
		$('.info-slider h2:first-child').css({
			'letterSpacing': '25px',
			'color': '#D24D39',
		});


		$('.imagen-slider.desktop figure.one-img').stop().fadeOut(400);
		$('.imagen-slider.desktop figure.summer').stop().fadeIn(400);

	}, function(){

	    $(this).css('letter-spacing', '0');
	    $(this).removeClass('cambioSummer');
		$('.info-slider h2:first-child').css({
			'letterSpacing': '0',
			'color': '#000',
		});

		$('.imagen-slider.desktop figure.summer').stop().fadeOut(400);
		$('.imagen-slider.desktop figure.one-img').stop().fadeIn(400);
		
	});



	//EFECTO HOME SPRINNG
	$('section.slider-bumming .info-slider ul li.spring').hover(function(){
		let hh2 = $('section.slider-bumming .info-slider h2.estacion-principal');

		hh2.text("SPRING");
		hh2.css('letter-spacing', '25px');
		hh2.css('display', 'inline-block');
		hh2.addClass('cambioSpring');
		$('.info-slider h2:first-child').css({
			'letterSpacing': '25px',
			'color': '#D24D39',
		});

		$('.imagen-slider.desktop figure.one-img').stop().fadeOut(400);
		$('.imagen-slider.desktop figure.two-img').stop().fadeIn(400);

	}, function(){

		let hh2 = $('section.slider-bumming .info-slider h2.estacion-principal');
		hh2.text("SUMMER");
	    hh2.css('letter-spacing', '0');
	    hh2.removeClass('cambioSpring');
		$('.info-slider h2:first-child').css({
			'letterSpacing': '0',
			'color': '#000',
		});


		$('.imagen-slider.desktop figure.two-img').stop().fadeOut(400);
		$('.imagen-slider.desktop figure.one-img').stop().fadeIn(400);
	});


	//EFECTO HOME SUMMER
	$('section.slider-bumming .info-slider ul li.summer').hover(function(){
		let hh2 = $('section.slider-bumming .info-slider h2.estacion-principal');

		hh2.text("SUMMER");
		hh2.css('letter-spacing', '25px');
		hh2.css('display', 'inline-block');
		hh2.addClass('cambioSummer');
		$('.info-slider h2:first-child').css({
			'letterSpacing': '25px',
			'color': '#D24D39',
		});

		$('.imagen-slider.desktop figure.one-img').stop().fadeOut(400);
		$('.imagen-slider.desktop figure.summer').stop().fadeIn(400);

	}, function(){
		let hh2 = $('section.slider-bumming .info-slider h2.estacion-principal');

		hh2.text("SPRING");
	    hh2.css('letter-spacing', '0');
	    hh2.removeClass('cambioSummer');
		$('.info-slider h2:first-child').css({
			'letterSpacing': '0',
			'color': '#000',
		});


		$('.imagen-slider.desktop figure.summer').stop().fadeOut(400);
		$('.imagen-slider.desktop figure.one-img').stop().fadeIn(400);	
	});



	//EFECTO HOME FALL
	$('section.slider-bumming .info-slider ul li.fall').hover(function(){
		let hh2 = $('section.slider-bumming .info-slider h2.estacion-principal');

		hh2.text("FALL");
		hh2.css('letter-spacing', '25px');
		hh2.css('display', 'block');
		hh2.addClass('cambioFall');
		$('.info-slider h2:first-child').css({
			'letterSpacing': '25px',
			'color': '#D24D39',
		});


		$('.imagen-slider.desktop figure.one-img').stop().fadeOut(400);
		$('.imagen-slider.desktop figure.fall').stop().fadeIn(400);

	}, function(){
		let hh2 = $('section.slider-bumming .info-slider h2.estacion-principal');

		hh2.text("SUMMER");
	    hh2.css('letter-spacing', '0');
	    hh2.css('display', 'inline-block');
	    hh2.removeClass('cambioFall');
		$('.info-slider h2:first-child').css({
			'letterSpacing': '0',
			'color': '#000',
		});


		$('.imagen-slider.desktop figure.fall').stop().fadeOut(400);
		$('.imagen-slider.desktop figure.one-img').stop().fadeIn(400);
	});



	//EFECTO HOME WINTER
	$('section.slider-bumming .info-slider ul li.winter').hover(function(){
		let hh2 = $('section.slider-bumming .info-slider h2.estacion-principal');

		hh2.text("WINTER");
		hh2.css('letter-spacing', '25px');
		hh2.css('display', 'inline-block');
		hh2.addClass('cambioWinter');
		$('.info-slider h2:first-child').css({
			'letterSpacing': '25px',
			'color': '#D24D39',
		});


		$('.imagen-slider.desktop figure.one-img').stop().fadeOut(400);
		$('.imagen-slider.desktop figure.winter').stop().fadeIn(400);

	}, function(){
		let hh2 = $('section.slider-bumming .info-slider h2.estacion-principal');

		hh2.text("SUMMER");
	    hh2.css('letter-spacing', '0');
	    hh2.removeClass('cambioWinter');
		$('.info-slider h2:first-child').css({
			'letterSpacing': '0',
			'color': '#000',
		});

		$('.imagen-slider.desktop figure.winter').stop().fadeOut(400);
		$('.imagen-slider.desktop figure.one-img').stop().fadeIn(400);
	});

	//EFECTO DESKTOP ESTACIONES\\  ----------------------------------------------------------------------------
}




