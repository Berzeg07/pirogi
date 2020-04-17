"use strict"
//templates
new Vue({
		el: '#global-svg',
		template: '<svg aria-hidden="true" style="position: absolute; width: 0; height: 0; overflow: hidden;" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><symbol id="icon-next" viewBox="0 0 32 32"><title>next</title><path d="M11.453 22.12l6.107-6.12-6.107-6.12 1.88-1.88 8 8-8 8-1.88-1.88z"></path></symbol><symbol id="icon-prev" viewBox="0 0 32 32"><title>prev</title><path d="M20.547 22.12l-6.107-6.12 6.107-6.12-1.88-1.88-8 8 8 8 1.88-1.88z"></path></symbol><symbol id="icon-down" viewBox="0 0 32 32"><title>down</title><path d="M9.88 11.453l6.12 6.107 6.12-6.107 1.88 1.88-8 8-8-8 1.88-1.88z"></path></symbol><symbol id="icon-access-time" viewBox="0 0 32 32"><title>access-time</title><path d="M15.987 2.667c-7.36 0-13.32 5.973-13.32 13.333s5.96 13.333 13.32 13.333c7.373 0 13.347-5.973 13.347-13.333s-5.973-13.333-13.347-13.333zM16 26.667c-5.893 0-10.667-4.773-10.667-10.667s4.773-10.667 10.667-10.667 10.667 4.773 10.667 10.667-4.773 10.667-10.667 10.667z"></path><path d="M16.667 9.333h-2v8l7 4.2 1-1.64-6-3.56z"></path></symbol><symbol id="icon-check-box" viewBox="0 0 32 32"><title>check-box</title><path d="M25.333 4h-18.667c-1.48 0-2.667 1.2-2.667 2.667v18.667c0 1.467 1.187 2.667 2.667 2.667h18.667c1.48 0 2.667-1.2 2.667-2.667v-18.667c0-1.467-1.187-2.667-2.667-2.667zM13.333 22.667l-6.667-6.667 1.88-1.88 4.787 4.773 10.12-10.12 1.88 1.893-12 12z"></path></symbol><symbol id="icon-checkbox-outline" viewBox="0 0 32 32"><title>checkbox-outline</title><path d="M25.333 6.667v18.667h-18.667v-18.667h18.667zM25.333 4h-18.667c-1.467 0-2.667 1.2-2.667 2.667v18.667c0 1.467 1.2 2.667 2.667 2.667h18.667c1.467 0 2.667-1.2 2.667-2.667v-18.667c0-1.467-1.2-2.667-2.667-2.667z"></path></symbol><symbol id="icon-filter-list" viewBox="0 0 32 32"><title>filter-list</title><path d="M13.333 24h5.333v-2.667h-5.333v2.667zM4 8v2.667h24v-2.667h-24zM8 17.333h16v-2.667h-16v2.667z"></path></symbol><symbol id="icon-nature-people" viewBox="0 0 32 32"><title>nature-people</title><path d="M29.56 12.227c0-5.16-4.173-9.333-9.333-9.333s-9.333 4.173-9.333 9.333c0 4.627 3.36 8.453 7.773 9.187v5.253h-10.667v-4h1.333v-5.333c0-0.733-0.6-1.333-1.333-1.333h-4c-0.733 0-1.333 0.6-1.333 1.333v5.333h1.333v6.667h21.333v-2.667h-4v-5.173c4.627-0.547 8.227-4.48 8.227-9.267zM6 14.667c1.107 0 2-0.893 2-2s-0.893-2-2-2-2 0.893-2 2 0.893 2 2 2z"></path></symbol><symbol id="icon-location" viewBox="0 0 32 32"><title>location</title><path d="M16 2.667c-5.16 0-9.333 4.173-9.333 9.333 0 7 9.333 17.333 9.333 17.333s9.333-10.333 9.333-17.333c0-5.16-4.173-9.333-9.333-9.333zM16 15.333c-1.84 0-3.333-1.493-3.333-3.333s1.493-3.333 3.333-3.333 3.333 1.493 3.333 3.333-1.493 3.333-3.333 3.333z"></path></symbol><symbol id="icon-shopping-basket" viewBox="0 0 32 32"><title>shopping-basket</title><path d="M22.947 12l-5.84-8.747c-0.253-0.373-0.68-0.56-1.107-0.56s-0.853 0.187-1.107 0.573l-5.84 8.733h-6.387c-0.733 0-1.333 0.6-1.333 1.333 0 0.12 0.013 0.24 0.053 0.36l3.387 12.36c0.307 1.12 1.333 1.947 2.56 1.947h17.333c1.227 0 2.253-0.827 2.573-1.947l3.387-12.36 0.040-0.36c0-0.733-0.6-1.333-1.333-1.333h-6.387zM12 12l4-5.867 4 5.867h-8zM16 22.667c-1.467 0-2.667-1.2-2.667-2.667s1.2-2.667 2.667-2.667 2.667 1.2 2.667 2.667-1.2 2.667-2.667 2.667z"></path></symbol><symbol id="icon-star-border" viewBox="0 0 32 32"><title>star-border</title><path d="M29.333 12.32l-9.587-0.827-3.747-8.827-3.747 8.84-9.587 0.813 7.28 6.307-2.187 9.373 8.24-4.973 8.24 4.973-2.173-9.373 7.267-6.307zM16 20.533l-5.013 3.027 1.333-5.707-4.427-3.84 5.84-0.507 2.267-5.373 2.28 5.387 5.84 0.507-4.427 3.84 1.333 5.707-5.027-3.040z"></path></symbol><symbol id="icon-star" viewBox="0 0 32 32"><title>star</title><path d="M16 20.089l6.596 4.8-2.524-7.751 6.596-4.693h-8.089l-2.578-8-2.578 8h-8.089l6.596 4.693-2.524 7.751z"></path></symbol><symbol id="icon-delete-forever" viewBox="0 0 20 20"><title>delete-forever</title><path d="M5 15.833c0 0.917 0.75 1.667 1.667 1.667h6.667c0.917 0 1.667-0.75 1.667-1.667v-10h-10v10zM7.050 9.9l1.175-1.175 1.775 1.767 1.767-1.767 1.175 1.175-1.767 1.767 1.767 1.767-1.175 1.175-1.767-1.767-1.767 1.767-1.175-1.175 1.767-1.767-1.775-1.767zM12.917 3.333l-0.833-0.833h-4.167l-0.833 0.833h-2.917v1.667h11.667v-1.667z"></path></symbol></defs></svg>'
	})

	new Vue({
			el: '#more-svg',
			template: '<svg aria-hidden="true" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="position: absolute; width: 0px; height: 0px; overflow: hidden;"><defs><symbol id="icon-star" viewBox="0 0 32 32"><title>star</title><path d="M16 23.027l8.24 4.973-2.187-9.373 7.28-6.307-9.587-0.813-3.747-8.84-3.747 8.84-9.587 0.813 7.28 6.307-2.187 9.373z"></path></symbol><symbol id="icon-star-border" viewBox="0 0 32 32"><title>star-border</title><path d="M29.333 12.32l-9.587-0.827-3.747-8.827-3.747 8.84-9.587 0.813 7.28 6.307-2.187 9.373 8.24-4.973 8.24 4.973-2.173-9.373 7.267-6.307zM16 20.533l-5.013 3.027 1.333-5.707-4.427-3.84 5.84-0.507 2.267-5.373 2.28 5.387 5.84 0.507-4.427 3.84 1.333 5.707-5.027-3.040z"></path></symbol><symbol id="icon-heart-empty" viewBox="0 0 32 32"><title>heart-empty</title><path fill="#d80027" d="M23.563 1.938c-2.643 0-4.962 1.268-6.708 3.667-0.357 0.49-0.654 0.979-0.898 1.432-0.235-0.45-0.521-0.936-0.866-1.422-1.704-2.405-4.005-3.677-6.652-3.677-4.951 0-8.438 4.167-8.438 9.157 0 5.65 4.55 9.527 11.437 15.396 1.239 1.056 2.52 2.147 3.883 3.34 0.177 0.155 0.397 0.232 0.617 0.232s0.441-0.077 0.617-0.232c1.448-1.267 2.807-2.42 4.12-3.535 6.419-5.447 11.325-9.484 11.325-15.201 0-4.998-3.494-9.157-8.438-9.157zM19.462 24.866c-1.131 0.96-2.296 1.948-3.524 3.015-1.143-0.993-2.229-1.918-3.284-2.818-6.605-5.628-10.791-9.186-10.791-13.969 0-4.152 2.834-7.295 6.575-7.295 2.026 0 3.74 0.969 5.092 2.856 1.067 1.488 1.5 3.016 1.504 3.032 0.111 0.403 0.477 0.684 0.895 0.688 0.421 0.002 0.79-0.271 0.908-0.674 0.017-0.059 1.785-5.901 6.725-5.901 3.741 0 6.575 3.143 6.575 7.295 0 4.723-4.254 8.323-10.675 13.771z" style="fill: var(--color1, #d80027);"></path></symbol><symbol id="icon-heart" viewBox="0 0 32 32"><title>heart</title><path fill="#fd003a" d="M23.563 1.938c-3.788 0-6.225 2.644-7.5 5.025 0 0 0-0.001-0.001-0.002-1.276-2.381-3.838-5.023-7.624-5.023-4.819 0-8.438 3.938-8.438 9.15 0 5.644 4.537 9.525 11.438 15.394 1.218 1.050 2.637 2.156 4.006 3.337 0.169 0.169 0.394 0.244 0.619 0.244 0.207 0 0.431-0.075 0.619-0.244 1.35-1.181 2.663-2.288 3.882-3.337 6.881-5.869 11.437-9.75 11.437-15.394 0-5.213-3.637-9.15-8.438-9.15z" style="fill: var(--color2, #fd003a);"></path><path fill="#dd0030" d="M32 11.088c0 5.644-4.556 9.525-11.437 15.394-1.219 1.050-2.532 2.156-3.882 3.337-0.188 0.169-0.412 0.244-0.619 0.244v-23.1c1.275-2.381 3.712-5.025 7.5-5.025 4.8 0 8.438 3.938 8.438 9.15z" style="fill: var(--color3, #dd0030);"></path></symbol></defs></svg>'
		})


function scrollEffects() {
	var wow = new WOW(
	  {
	    mobile: false,
	  }
	);
	wow.init();
}

function loading() {
	$('.loading').fadeOut(1500);
}

//функция помощник: siblings
var getSiblings = function(elem) {
	var siblings = [];
	var sibling = elem.parentNode.firstChild;
	for(; sibling; sibling = sibling.nextSibling) {
		if(sibling.nodeType !== 1 || sibling === elem) continue;
		siblings.push(sibling);
	}
	return siblings;
}

//active
function active(elem) {
	$(elem).on('click', function(){
		if($(this).hasClass('active')){
			$(this).removeClass('active');
		}else{
			$(this).addClass('active');
		}
	});
}

//active & siblings off
function activeSiblings(elem) {
	$(elem).on('click', function(){
		$(this).addClass('active').siblings().removeClass('active');
	});
}

//active other
function activerOther(elem, target) {
	$(elem).on('click', function(){
		$(target).removeClass('menu__hide').toggleClass('active');
	});
}

//bodyOverflow
function bodyOverflow(elem) {
	$(window).on('resize || load', function(){
		var btn = $(elem);
		var body = $('body');
		var windowWidth = $(this).width();

		btn.on('click', function(){
			if(windowWidth <= 1024){
				body.toggleClass('overflow');
			}
		});
	});
}

//toggleClass on window scroll
function changeClassOnScroll(){
	$(window).scroll(function() {
    var elem = $('.menu');
    var height = elem.innerHeight();
    var top = $(this).scrollTop();
		var windowWidth = $(window).width();

    if (top > 50) {
			$(elem).addClass('scroll');
			$('.page-header').addClass('fixed');
			$('.scroll').on('mouseleave', function(){
				$('.scroll').removeClass('slideInDown').addClass('slideOutUp');
				setTimeout(function(){
					$('.scroll').removeClass('slideOutUp');
				}, 1000);
			});
    } else {
			$(elem).removeClass('scroll');
			$('.page-header').removeClass('fixed');
    }

		if(windowWidth <= 1024){
			if (top > 50) {
				$(elem).removeClass('scroll');
	      $(pageTop).show();
				$(pageBot).removeClass('scroll');
	    }
		}
  });
}

//Universal Tabs
function tabs() {
	$(document).on('click', '[data-tabclass]', function() {
		var content = $(this).attr('data-tabclass');
		var number = $(this).attr('data-tabnumber');
		$('[data-tabclass="' + content + '"]').each(function() {
			if ($(this).attr('data-tabnumber') == number) {
				$(this).addClass('active').siblings().removeClass('active');
			}
		});
		$('.' + content + ' > [data-tabnumber="' + number + '"]').show().addClass('active animated').removeClass('hide').siblings().hide().removeClass('active animated');
	});
};

//animate
function animate(button, content, animationIn, animationOut, hideTiming) {
	hideTiming = hideTiming || 1000;
	var elem = document.querySelector(content);
	$(button).on('click', function() {
		$(content).show();
		var animateContent = content;
		if ($(content).hasClass(animationIn)) {
			$(content).removeClass(animationIn).addClass(animationOut + ' animated');
		} else {
			$(content).removeClass(animationOut).addClass(animationIn + ' animated');
		}
	});
}

//animate + hide
function animateHide(button, content, animationIn, animationOut, display, hideTiming) {
	hideTiming = hideTiming || 1000;
	display = display || 'block';
	var elem = document.querySelector(content);
	$(button).on('click', function() {
		$(content).show().css('display', display);
		var animateContent = content;
		if ($(content).hasClass(animationIn)) {
			$(content).removeClass(animationIn).addClass(animationOut + ' animated');
			setTimeout(function(){
				$(content).hide();
			}, hideTiming);
		} else {
			$(content).removeClass(animationOut).addClass(animationIn + ' animated');
		}
	});
}

//owl-slider
function popularSlider(animationIn, animationOut, elem, items, navContainer, navText) {
	var arrayPosition = [];
	var arrayOffset = [];
	animationIn = animationIn || 'zoomIn';
	animationOut = animationOut || 'fadeOut';
	elem = elem || '.popular__slider';
	items = items || 5;
	navContainer = navContainer || '';
	navText = navText || ['<svg class="icon icon-prev"><use xlink:href="#icon-prev"></use></svg>', '<svg class="icon icon-next"><use xlink:href="#icon-next"></use></svg>'];
	if(elem){
		$(elem).owlCarousel({
			nav: true,
			navContainer: navContainer,
			navText: navText,
			items: items,
			animateIn: animationIn,
			animateOut: animationOut,
			loop: true,
			URLhashListener: true,
      startPosition: 'URLHash',
			dots: true,
			dotsEach: true,
			dotsContainer: '',
			navText: navText,
			onInitialized: function(){
				var elem = $('.popular__slider .popular__img');
				var target = $('.popular__slider .owl-nav');

				var elemHeight = elem.innerHeight() / 2;
				var elemPosition = elem.position();

				target.css('top', elemPosition.top + elemHeight);
			},
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				1025: {
					items: 5
				}
			}
		});
	}
}

function brandSlider(animationIn, animationOut, elem, items, navContainer, navText) {
	var arrayPosition = [];
	var arrayOffset = [];
	animationIn = animationIn || 'zoomIn';
	animationOut = animationOut || 'fadeOut';
	elem = elem || '.brand__slider';
	items = items || 5;
	navContainer = navContainer || '';
	navText = navText || ['<svg class="icon icon-prev"><use xlink:href="#icon-prev"></use></svg>', '<svg class="icon icon-next"><use xlink:href="#icon-next"></use></svg>'];
	if(elem){
		$(elem).owlCarousel({
			nav: true,
			navContainer: navContainer,
			navText: navText,
			items: items,
			animateIn: animationIn,
			animateOut: animationOut,
			loop: true,
			URLhashListener: true,
      startPosition: 'URLHash',
			dots: true,
			dotsEach: true,
			dotsContainer: '',
			navText: navText,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				1025: {
					items: 5
				}
			}
		});
	}
}


//slick slider
function sliderBrand() {
	$('.brand__wrap').slick({
		centerMode: true,
		centerPadding: '0',
		slidesToShow: 4,
		infinite: true,
		focusOnSelect: true,
		variableWidth: true,
		prevArrow: '<button type="button" class="slick__arrow slick__prev slick-prev"><svg class="icon icon-keyboard-arrow-left"><use xlink:href="#icon-keyboard-arrow-left"></use></svg></button>',
		nextArrow: '<button type="button" class="slick__arrow slick__next slick-next"><svg class="icon icon-keyboard-arrow-right"><use xlink:href="#icon-keyboard-arrow-right"></use></svg></button>',
		autoWidth: true
	});
}


//Маска для телефона
function phoneMask() {
	$("input[type=tel]").mask("+7(999)999-99-99", {
		placeholder: "+7(___)___-__-__"
	});
}

function accordion() {
  var allPanels = $('.accordion .accContent').hide();
	var btn = $('.accBtn');
	var btnActive = $('.accBtn.active');
	$('.accordion .accContent.active').show();

  btn.click(function() {
    $(this).parent().siblings().find('.accContent').slideUp();
    $(this).parent().siblings().find('.accBtn').removeClass('active');
    $(this).next().slideToggle();
		$(this).toggleClass('active');
	  });
}

function checkFix() {
	$('.checkFixElem').on('click', function(){
		$(this).closest('.checkFixBox').siblings().find('.checkFixElem').prop('checked', false);
	});
}

function map() {
	$('.img-map').mapster({
    fillColor: 'fc5900',
    fillOpacity: 0.6,
		fadeDuration: 400
  });
}

function menuHover() {
	var link = $('.menuHover');

	link.on('mouseenter', function(){
		$('.scroll').addClass('active animated slideInDown');
	});

}

function checkbox(item) {
	var elem = $(item);
	var label = $(item).closest('label');

	elem.on('click', function(){
		$(this).closest('label').toggleClass('active');
		$(this).closest('label').find('img').prop('src', 'img/radius--white.png');
		$(this).closest('.checkFixBox').siblings().find('label').removeClass('active');
		$(this).closest('.checkFixBox').siblings().find('img').prop('src', 'img/radius.png');
	});
}

function mobileTabScroll() {
	$(window).on('resize || load', function(){
		var windowWidth = $(this).width();

			if(windowWidth <= 1024){
				$('.work__nav-item').attr('href', '#work__content');
			}else {
				$('.work__nav-item').removeAttr('href');
			}
	});
}

//zoom
function okZoom() {
	$('.okzoom').okzoom({
        width:  200,
        height: 200,
        border: "1px solid #fff",
        //shadow: "0 0 5px #000"
    });
}

//productCalc
function productCalc(){
	var btn = $('.calcBtn');
	var dec = $('.calcDec');
	var inc = $('.calcInc');
	var output = $('.calcNumber');
	var outputText = '.calcNumber';
	var valueBox = $('.calcOutput');
	var valueBoxText = '.calcOutput';
	var btnWeight = $('.calcCheckbox');
	var submit = $('.calcSubmit');
	var singleItem = $('.calcSingleItem');
	var singleSubmit = $('.calcSingleSubmit');

	if(btn){
		$(btn).on('click', function(){
		var output = $(this).closest('.calcItem').find(outputText);
		var value = $(this).closest('.calcItem').find(valueBoxText);
		var valueHtml = $(value).html();

		if($(this).hasClass('calcDec')){
			--valueHtml
		}else if($(this).hasClass('calcInc')){
			++valueHtml
		}
		if(valueHtml <= 1){
			valueHtml = 1;
		}
		var summ = valueHtml * parseInt(output.attr('data-price'));

		$(value).html(valueHtml);
		$(output).html(summ);
	});
	}
	if(btnWeight){
		$(btnWeight).on('click', function(){
			var number = parseInt($(this).find('.calcWeightNumber').html());
			var price = $(this).closest('.calcItem').find('.calcNumber');
			var output = $(this).closest('.calcItem').find('.calcOutput');

			price.html(number).attr('data-price', number);
			output.html(1);
		});
	}

	if(submit){
		$(submit).on('click', function(){
			var output = $(this).closest('.calcItem').find(outputText);
			var value = $(this).closest('.calcItem').find(valueBoxText);
			var cartNumber = $('.calcCart');
			var cartCount = $('.calcCartCount');

			var summ = parseInt(cartNumber.html()) + parseInt(output.html());
			var valueSumm = parseInt(value.html()) + parseInt(cartCount.html());

			cartCount.html(valueSumm);
			cartNumber.html(summ);
		});
	}

	if(singleSubmit){
		$(singleSubmit).on('click', function(){
			var output = $(this).closest('.calcSingleItem').find(outputText);
			var cartNumber = $('.calcCart');
			var cartCount = $('.calcCartCount');

			var summ = parseInt(cartNumber.html()) + parseInt(output.html());
			var valueSumm = 1 + parseInt(cartCount.html());

			cartCount.html(valueSumm);
			cartNumber.html(summ);
		});
	}
}

//cartCalc
function cartCalc() {
	var inc = $('.cartCalcInc');
	var dec = $('.cartCalcDec');
	var countNumber_t = '.cartCalcNumber';
	var close = $('.cartCalcDelete');
	var summ_t = '.cartCalcTotalSumm';
	var item_t = '.cartCalcItem';
	var singleItemPrice_t = '.cartCalcSinglePrice';
	var singleSumm_t = '.cartSummNumber';
	var total = document.querySelector('.cartCalcTotalSumm');
	var total_t = '.cartCalcTotalSumm';
	var headerCalcCount = document.querySelector('.calcCartCount');
	var headerCalcCount_t = '.calcCartCount';
	var headerCalcSumm = document.querySelector('.calcCart');
	var headerCalcSumm_t = '.calcCart';
	var stepTotal = document.querySelector('.cartCalcStepTotalSumm');
	var stepTotal_t = ('.cartCalcStepTotalSumm');
	var sum = 0;
	var sumArray = [];
	var countArray = [];

	function calcOnWindowLoad(){
			var itemsSumm = document.querySelectorAll(singleSumm_t);
			var itemsCount = document.querySelectorAll(countNumber_t);
			var items = document.querySelectorAll(item_t);

			//Итоговая общая сумма
			sumArray.length = 0;
			itemsSumm.forEach(function(item, index, value){
				var number = parseInt(item.textContent);
				sumArray.push(number);
			});
			sum = 0;
			if(total || headerCalcSumm){
				for(var key in sumArray) {
					sum = sum + parseInt(sumArray[key]);
				}
				if(!sum){
					sum = 0;
				}

				total.textContent = sum;
				headerCalcSumm.textContent = sum;
				stepTotal.textContent = sum;
			}

			//Итоговое количество
			countArray.length = 0;
			itemsCount.forEach(function(item, index, value){
				var number = parseInt(item.textContent);
				countArray.push(number);
			});
			sum = 0;
			if(headerCalcCount){
				for(var key in countArray) {
					sum = sum + parseInt(countArray[key]);
				}
				if(!sum){
					sum = 0;
				}
				headerCalcCount.textContent = sum;
			}
		}

	function countInc(){
		var count = $(this).closest(item_t).find(countNumber_t);
		var countNumber = parseInt(count.html());
		var singleItemPrice = $(this).closest(item_t).find(singleItemPrice_t);
		var singleItemPriceNumber = parseInt(singleItemPrice.html());
		var singleSumm = $(this).closest(item_t).find($(singleSumm_t));
		var headerCount = parseInt($(headerCalcCount_t).html());
		var itemsSumm = document.querySelectorAll(singleSumm_t);

		countNumber++
		count.html(countNumber);

		headerCount++
		$(headerCalcCount_t).html(headerCount);

		var summ = countNumber * singleItemPriceNumber;
		singleSumm.html(summ);

		sumArray.length = 0;

		itemsSumm.forEach(function(item, index, value){
			var number = parseInt(item.textContent);
			sumArray.push(number);
		});

		sum = 0;
		if(total || headerCalcSumm){
			for(var key in sumArray) {
				sum = sum + parseInt(sumArray[key]);
			}
			if(!sum){
				sum = 0;
			}
			total.textContent = sum;
			headerCalcSumm.textContent = sum;
			stepTotal.textContent = sum;
		}
	}

	function countDec(){
		var count = $(this).closest(item_t).find(countNumber_t);
		var countNumber = parseInt(count.html());
		var singleItemPrice = $(this).closest(item_t).find(singleItemPrice_t);
		var singleItemPriceNumber = parseInt(singleItemPrice.html());
		var singleSumm = $(this).closest(item_t).find($(singleSumm_t));
		var headerCount = parseInt($(headerCalcCount_t).html());

		var itemsSumm = document.querySelectorAll(singleSumm_t);

		countNumber--
		if(countNumber <= 1){
			countNumber = 1
		}
		count.html(countNumber);

		headerCount--
		if(countNumber <= 1){
			--headerCount
			++headerCount
		}
		itemsSumm.forEach(function(item, index, value){
			if(headerCount <= ++index) {
				headerCount = index;
			}
		});
		$(headerCalcCount_t).html(headerCount);

		var summ = countNumber * singleItemPriceNumber;
		singleSumm.html(summ);


		sumArray.length = 0;
		itemsSumm.forEach(function(item, index, value){
			var number = parseInt(item.textContent);
			sumArray.push(number);
		});
		sum = 0;
		if(total || headerCalcSumm){
			for(var key in sumArray) {
				sum = sum + parseInt(sumArray[key]);
			}
			if(!sum){
				sum = 0;
			}
			total.textContent = sum;
			headerCalcSumm.textContent = sum;
			stepTotal.textContent = sum;
		}
	}

	function onCloseItem(){
		var singleSumm = $(this).closest(item_t).find(singleSumm_t);
		var singleSummNumber = parseInt(singleSumm.html());
		var headerCalcSumm = $(headerCalcSumm_t);
		var headerCalcCount = $(headerCalcCount_t);
		var count = parseInt($(this).closest(item_t).find(countNumber_t).html());
		var headerCount = parseInt($(headerCalcCount_t).html());
		var stepTotal = $(stepTotal_t);

		var totalCount = headerCount - count;

		var total = $(total_t);
		var totalPrice = parseInt(total.html()) - singleSummNumber;

		$(this).closest(item_t).addClass('animated slideOutLeft').hide(1000);
		total.html(totalPrice);
		stepTotal.html(totalPrice);
		headerCalcSumm.html(totalPrice);
		headerCalcCount.html(totalCount);
	}

	calcOnWindowLoad();

	inc.on('click', countInc);

	dec.on('click', countDec);

	close.on('click', onCloseItem);
}

function stepSelect() {
	var elem = $('.step__select');

	elem.on('focus || mouseenter', function(){
		$(this).closest('.step__select-box').find('.step__select-icon').addClass('active');
	});
	elem.on('mouseleave', function(){
		$(this).closest('.step__select-box').find('.step__select-icon').removeClass('active');
	});
}

	function stepValidation() {
		var form = $('.step');

		function stepForward(currentBox, formElem, inactiveBox, formElemNext){
			$(formElem).change(function(){
				$(formElem).each(function(index, item, array){
					var elem = $(item);
					if(elem.val() != ''){
						$(this).addClass('success');
						var stepSuccess = $(formElem + '.success');
						for(var i = 0; i < stepSuccess.length; i++){
							if(i >= 1){
								$(inactiveBox).removeClass('inactive');
								$(formElemNext).prop('disabled', false);
								$(currentBox).addClass('active');
							}else {
								$(inactiveBox).addClass('inactive');
								$(formElemNext).prop('disabled', 'disabled');
								$(currentBox).removeClass('active');
							}

						}
					}else {
						$(this).removeClass('success');
					}
				});
			});
		}

		stepForward('.stepBoxFirst', '.stepFirst', '.stepBoxSecond', '.stepSecond');
		stepForward('.stepBoxSecond', '.stepSecond', '.stepBoxThird', '.stepThird');
		stepForward('.stepBoxThird', '.stepThird', '.stepBoxFourth', '.stepFourth');

	}
window.onload = function() {
	//scrollEvents
	scrollEffects();

	//other

	checkFix('.product__input');
	okZoom();
	checkFix();


	//active toggle
	active('.hamburger');
	active('.hamburger__wrap');

	//active siblings
	activeSiblings('.calcCheckbox');


	//Animation
	animate('.hamburger', '.hamburger__line1', 'rotate_in_45', 'rotate_in_45_out');
	animate('.hamburger', '.hamburger__line3', 'rotate_in_-45', 'rotate_in_-45_out');
	//Animation+hide
	animateHide('.hamburger__wrap', '.menu', 'slideInDown', 'slideOutUp', 'block');

	//slider(animationIn, animationOut, elem, items, navContainer, navText)
	popularSlider();
	brandSlider();

	//calc
	productCalc();

	//loading
	loading();

};

//other
bodyOverflow('.hamburger');
mobileTabScroll();


$(function(){
    $.getJSON('/metro.json', function(data) {
                $.each(data, function(key, val) {
                    $('#metro').append('<option href="https://www.osetinskiyepirogi.com/moscow' + val + '">' + key + '</option>');
                });
    });
	$.getJSON('/city.json', function(data) {
                $.each(data, function(key, val) {
                    $('#city').append('<option href=https://www.osetinskiyepirogi.com/moscow' + val + '">' + key + '</option>');
                });
    });
	$.getJSON('/rayon.json', function(data) {
                $.each(data, function(key, val) {
                    $('#rayon').append('<option href="https://www.osetinskiyepirogi.com' + val + '">' + key + '</option>');
                });
    });
	$("select#metro").change(function(){
		if ($("select#metro option:selected").val()!='#')
			document.location.href=$("select#metro option:selected").attr('href');
	});
	$("select#city").change(function(){
		if ($("select#city option:selected").val()!='#')
			document.location.href=$("select#city option:selected").attr('href');
	});
	$("select#rayon").change(function(){
		if ($("select#rayon option:selected").val()!='#')
			document.location.href=$("select#rayon option:selected").attr('href');
	});
	$('.calcCheckbox').click(function(){
		if (!$(this).hasClass('active')) {
			$(this).addClass('active');
			$(this).siblings('.calcCheckbox').each(function(n){
				$(this).removeClass('active');
			});
			var price = $(this).find('.calcWeightNumber').text()*1,
			count = $(this).parents('.product__item').find('.product__count-number').text()*1;
			$(this).parents('.product__item').find('.calcNumber').text(price*count);
		}
	});
	$('.calcBtn.product__btn').click(function(){
		var price = $(this).parents('.product__item').find('.calcCheckbox.active').find('.calcWeightNumber').text()*1,
		count = $(this).siblings('.product__count-number').text()*1;
		if ($(this).hasClass('calcDec')) {
			if (count>1) {
				count--;
				$(this).siblings('.product__count-number').text(count);
				$(this).parents('.product__item').find('.calcNumber').text(price*count);
			}
		}
		else {
			count++;
			$(this).siblings('.product__count-number').text(count);
			$(this).parents('.product__item').find('.calcNumber').text(price*count);
		}
	});
	$('.sale .sale__btn').click(function(){
		var idtop = $('section.callback').offset().top;
			$('html,body').animate({scrollTop: idtop}, 1000);
	});
	$('.callback__content form.form').submit(function(e){
		e.preventDefault();
		var $form = $(this);
      	var valid = true;
      	var inputphone=$form.find("input.form__input--tel");
      	if ((inputphone.val()=="") && valid){
        	valid = false;
        	inputphone.attr("style","border:2px solid #FF0000;");
        	inputphone.val('Обязательное поле');
        	setTimeout(function(){inputphone.val(''); inputphone.focus(); inputphone.attr("style","border:1px solid #D3D3D3");}, 1000);
      	}
      	var inputname=$form.find("input.form__input--name");
      	if ((inputname.val()=="") && valid) {
        	valid = false;
        	inputname.attr("style","border:2px solid #FF0000;");
        	inputname.val('Обязательное поле');
        	setTimeout(function(){inputname.val(''); inputname.focus(); inputname.attr("style","border:1px solid #D3D3D3");}, 1000);
      	}
      	if (!$form.find('input.form__checkbox').prop('checked') && valid) {
      		valid = false;
      		$('.error_tooltip_main').fadeIn(200);
      		setTimeout(function() {$('.error_tooltip_main').fadeOut(200);}, 2000);
      	}
      	if (!valid) return false;
      	var ar=[];
		$('.callback__list').find('.callback__checkbox').each(function(){
			if ($(this).prop('checked'))
			ar.push($(this).siblings('span').text().trim());
		});
		$form.find('.btn.form__btn').prop('disabled','disabled');
      	$.ajax({
       		url: '/send2/',
        	type: 'POST',
			dataType: 'json',
        	data: {
          		user_name: $form.find("input.form__input--name").val(),
          		user_phone: $form.find("input.form__input--tel.formTel").val(),
          		user_message: $form.find("textarea.form__textarea").val(),
          		options: ar
        	},
        	error: function() {
          		$form.find('.btn.form__btn').prop('disabled',false);
        	},
        	success: function(resp) {
       			if(!resp.errors) {
	            	yaCounter49368724.reachGoal('BUY');
	            	swal({
	              	type: 'success',
	              	title: 'Благодарим Вас!',
	              	text: 'Мы свяжемся с Вами в ближайшее время',
	              	showConfirmButton: false,
	              	timer: 2000
	            	});
  					setTimeout(function() {$form[0].reset();$form.find('.btn.form__btn').prop('disabled',false);}, 2000);
  				}
        	}
      	});
	});
	$.jqCart({
        buttons: '.product__submit',
        handler: '/send/',
        visibleLabel: true,
        openByAdding: false,
        currency: 'руб.'
    });
    phoneMask();
    checkbox('.backet-order__checkbox');
    stepSelect();
    stepValidation();
});

function like() {
	var btn = '.likeBtn';

	$(btn).on('click', function(){
		var counter = $(this).find('.likeCounter');
		var status = $(this).closest('div').attr('data-status');

		if(status){
			var counterNumber = parseInt(counter.html());
			counterNumber--;
			$(counter).html(counterNumber);
			$(this).closest('div').removeAttr('data-status', 'check');
			$(this).find('.review__icon').removeClass('pulse').addClass('headShake');
		}else{
			$(this).closest('div').attr('data-status', 'check').addClass('active');
			$(this).find('.review__icon').addClass('pulse').removeClass('headShake');
			var counterNumber = parseInt($(this).find(counter).html());
			counterNumber++;
			$(counter).html(counterNumber);
		}
		if(counterNumber == 0){
			$(this).find('.review__icon').html('<svg class="icon icon-heart-empty"><use xlink:href="#icon-heart-empty"></use></svg>');
		}else{
			$(this).find('.review__icon').html('<svg class="icon icon-heart"><use xlink:href="#icon-heart"></use></svg>')
		}
	});
}

window.onload = function() {
	like();
};


$("body").on("click", "a.smyasom", function(){
	var idtop = $($(this).attr("href")).offset().top;
	$('html,body').animate({scrollTop: idtop}, 500);
	return false;
});