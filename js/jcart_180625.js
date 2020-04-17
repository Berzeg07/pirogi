/*!
 * jQuery jqCart Plugin v1.1.2
 * requires jQuery v1.9 or later
 *
 * http://incode.pro/
 *
 * Date: Date: 2016-05-18 19:15
 */
;(function($) {
  'use strict';
  var DB, 
    cartData,
    items,
    addingItemData = new Object(),
    orderPreview = '',
    totalCnt = 0,
    visibleLabel = false,
    isOpen = false,
    label = $('.page-header__cart'),
    modal = '<div class="jqcart-layout"><div class="jqcart-checkout">123</div></div>',
    orderform = '<p class="jqcart-cart-title">Информация для доставки:</p><form class="jqcart-orderform"><div><label>Ваше имя:</label><input type="text" name="user_name"></div><div><label>Телефон:</label><input type="tel" name="user_phone"></div><div><label>Адрес:</label><input type="text" name="user_address"></div><div><label>Сообщение:</label><textarea name="user_comment"></textarea></div><div><input type="submit" value="Заказать"><input type="reset" value="Добавить еще"></div></form>';
  var opts = {
		buttons: '.product__cart',
    cartLabel: '.page-header__cart',
		visibleLabel: false,
		openByAdding: false,
    handler: '/',
		currency: '$'
  };
  var actions = {
    init: function(o) {
      try {
          var x = 'test-localstorage-' + Date.now();
          localStorage.setItem(x, x);
          var y = localStorage.getItem(x);
          localStorage.removeItem(x);
          if (y !== x) {throw new Error();}
          DB = localStorage; // localStorage is fully functional!
      } catch (e) {
          DB = new MemoryStorage('m6541578653'); // fall back to a memory-based implementation
      };           
      opts = $.extend(opts, o);
      cartData = actions.getStorage();
      if (cartData !== null && Object.keys(cartData).length) {
        for (var key in cartData) {
          if (cartData.hasOwnProperty(key)) {
            totalCnt += cartData[key].count;
          }
        }
        visibleLabel = true;
      }
      $.ajax({
        url: '/blocks/pirogi/',
        dataType: 'json',
        success: function(resp) {
          items = resp;
        }        
      });

      label.prependTo(opts.cartLabel)[visibleLabel || opts.visibleLabel ? 'show' : 'hide']()
        .on('click', actions.openCart)
        .find('.jqcart-total-cnt').text(totalCnt);
      $('#closebutton').click(function(e){e.preventDefault();$('.cart').hide();});
      $(document)
        .on('click', opts.buttons, actions.addToCart)
        .on('click','.in-basket-text', actions.addToCart)
        .on('click','.plus',function(){
          var countblock = $(this).siblings('.count');
          countblock.text(countblock.text()*1+1);
        })
        .on('click','.minus',function(){
          var countblock = $(this).siblings('.count');
          if (countblock.text()*1>1)
            countblock.text(countblock.text()*1-1);
        })
        .on('click', '.jqcart-layout', function(e) {
          if (e.target === this) {
            actions.hideCart();
          }
        })
        .on('click', '.jqcart-incr', actions.changeAmount)
				.on('input keyup', '.jqcart-amount', actions.changeAmount)
        .on('click', '.jqcart-del-item', actions.delFromCart)
        .on('click', '.step__submit', actions.sendOrder)
        .on('reset', '.jqcart-orderform', actions.hideCart)
				.on('click', '.jqcart-print-order', actions.printOrder)
        .on('click', '.popup-basket-itog-add', actions.hideCart)
        .on('click', '.table__link', actions.addBuy1Click)
        .on('click', '.page-header__cart', function(e){ e.preventDefault(); actions.openCart()})
        .on('change', 'input[name=product-sale1]', actions.applyDiscount)
        .on('submit', '.quickorder', actions.quickorder)
        .on('change', '.backet-order__label', actions.recalcSum);
      if (actions.getStorage()) 
        actions.recalcTotal();
      var curUrl = document.location.href;
      var thisRegex = new RegExp('basket\/');
      if(thisRegex.test(curUrl)){
          actions.showCart();
      }
      return false;
    },
    addToCart: function(e) {
      var item, offset,selectedValue;
      e.preventDefault();
      item = $(this).parents('.product__item');
      offset = item.find('.calcCheckbox.active').data('offset');
      switch (offset) {
        case 1: 
          selectedValue = 800;
          break;
        case 2:
          selectedValue = 1000;
          break;
        case 3: 
          selectedValue = 1200;
          break;
        case 4: 
          selectedValue = 1400;
          break;
      };
      addingItemData.count = item.find('.product__count-number').text()*1;
      addingItemData.id = item.data('id') + '-00'+offset;
      addingItemData.price = items[item.data('id')]['prices'][selectedValue]['value']*1; console.log(addingItemData.price);
      addingItemData.title = items[item.data('id')]['name']+' '+selectedValue+' гр.';
      addingItemData.img = items[item.data('id')]['img']['src'];      
      
      if(typeof addingItemData.id === 'undefined') {
				console.log('Отсутствует ID товара');
				return false;
			}
      cartData = actions.getStorage() || {};
      if (cartData.hasOwnProperty(addingItemData.id)) {
        cartData[addingItemData.id].count += item.find('.product__count-number').text()*1;
      } 
        else {
        cartData[addingItemData.id] = addingItemData;
      }

      actions.setStorage(cartData);
      actions.changeTotalCnt(addingItemData.count);
      actions.recalcTotal();
      //actions.showProcess(addingItemData);
      actions.showProcess(item);
      label.show();
      if(opts.openByAdding) {
				actions.openCart();
			}
      return false;
    },
    delFromCart: function() {
      var $that = $(this),
        line = $that.closest('.jqcart-tr'),
        itemId = line.data('id'); 
      cartData = actions.getStorage();
      actions.changeTotalCnt(-cartData[itemId].count);
      delete cartData[itemId];
      actions.setStorage(cartData);
      line.remove();
      actions.recalcSum();
      actions.recalcTotal();
      $('.list').each(function(n){
        $(this).text(n+1);
      });
      return false;
    },
    changeAmount: function() {
      var $that = $(this),
        amount = $that.data('incr'),
        itemId = $that.parents('.jqcart-tr').data('id');
      cartData = actions.getStorage();
			cartData[itemId].count += amount;
			
      if (cartData[itemId].count < 1) {
        cartData[itemId].count = 1;
      }
      $that.siblings('.product__counter').find('.jqcart-amount').text(cartData[itemId].count);
      actions.setStorage(cartData);
      actions.recalcSum();
      actions.recalcTotal();
      return false;
    },
    recalcSum: function() {
      var subtotal = 0,
        amount,
        sum = 0,
        totalCnt = 0,
        price = 0;
      $('.jqcart-tr').each(function() {
        amount = +$('.jqcart-amount', this).text()*1;
        price = $('.cartCalcSinglePrice', this).text()*1;
        sum = Math.ceil(amount * price * 100) / 100;
        $('.jqcart-sum', this).html(sum + ' ' + opts.currency);
				subtotal = Math.ceil((subtotal + sum) * 100) / 100;
        totalCnt += amount;
        $(this).find('.cartSummNumber').text(sum);        
      });
      $('.backet__total').html(subtotal);
      $('.calcCart').text(subtotal);
      $('.calcCartCount').text(totalCnt);
      if ($('.backet-order__checkbox').prop('checked')) {
        $('.cartCalcTotalSumm').html(subtotal*.9);
        $('.cartCalcStepTotalSumm').html(subtotal*.9);
      }
      else {
        $('.cartCalcTotalSumm').html(subtotal);
        $('.cartCalcStepTotalSumm').html(subtotal);
      }
      //$('.page-header__bucket .count .number').text(totalCnt);
      $('.jqcart-total-cnt').text(totalCnt);
      if (totalCnt <= 0) {
				actions.hideCart();
				if(!opts.visibleLabel) {
        	label.hide();
				}
      }
      return false;
    },
    recalcTotal: function(){
      var subtotal = 0,
      totalCnt = 0,
      key, sum = 0;
      cartData = actions.getStorage();
      for (key in cartData) {
        if (cartData.hasOwnProperty(key)) {
          sum = Math.ceil((cartData[key].count * cartData[key].price) * 100) / 100;
          subtotal = Math.ceil((subtotal + sum) * 100) / 100;   
          totalCnt += cartData[key].count;       
        }
      };
      $('.calcCart').text(subtotal);
      $('.calcCartCount').text(totalCnt);
      //$('.page-header__bucket .count .number').text(totalCnt);
      if (totalCnt==0) 
        $('.backet-form__submit').prop('disabled','disabled');
      else
        $('.backet-form__submit').prop('disabled',false);
    },
    changeTotalCnt: function(n) {
      var cntOutput = $('.jqcart-total-cnt');
      cntOutput.text((+cntOutput.text() + n));
      return false;
    },
    openCart: function() {
      window.open('/basket/', '_blank');       
    },
    showCart: function () {
      var subtotal = 0,
      cartHtml = '';
      cartData = actions.getStorage();
      var key, sum = 0;
      orderPreview = '';
      var i =1;
      orderPreview = '<div class="backet-order__header">'+
            '<div class="backet-order__item backet-order__item--first backet-order__item--header">Наименование пиццы</div>'+
            '<div class="backet-order__item backet-order__item--header">Цена</div>'+
            '<div class="backet-order__item backet-order__item--header">Количество</div>'+
            '<div class="backet-order__item backet-order__item--header">Сумма</div>'+
            '<div class="backet-order__item backet-order__item--header"></div>'+
          '</div>';
      for (key in cartData) {
        if (cartData.hasOwnProperty(key)) {
          sum = Math.ceil((cartData[key].count * cartData[key].price) * 100) / 100;
          subtotal = Math.ceil((subtotal + sum) * 100) / 100;
          orderPreview += '<div class="backet-order__line cartCalcItem jqcart-tr" data-id="' + cartData[key].id + '">';
          orderPreview += '<div class="backet-order__item backet-order__item--first">';
          orderPreview += '<div class="backet-order__img"><img src="'+cartData[key].img+'" alt=""></div>';
          orderPreview += '<span class="list">'+i+'</span>. '+ cartData[key].title;
          orderPreview += '</div>';
          orderPreview += '<div class="backet-order__item">';
          orderPreview += '<span class="cartCalcSinglePrice">'+cartData[key].price+'</span> руб.';
          orderPreview += '</div';
          orderPreview += '<div class="backet-order__item">';
          orderPreview += '<div class="product__count">';
          orderPreview += '<button type="button" class="product__count-btn cartCalcDec jqcart-incr" data-incr="-1"><img src="../img/minus.png" alt=""></button>';
          orderPreview += '<span class="product__counter">';
          orderPreview += '<span class="product__count-number1 cartCalcNumber jqcart-amount">'+cartData[key].count+'</span>шт.';
          orderPreview += '</span>';
          orderPreview += '<button type="button" class="product__count-btn cartCalcInc jqcart-incr" data-incr="1"><img src="../img/plus.png" alt=""></button>';
          orderPreview += '</div>';
          orderPreview += '</div>';
          orderPreview += '<div class="backet-order__item">';
          orderPreview += '<span class="cartSummNumber">'+sum+'</span> руб.';
          orderPreview += '</div>';
          orderPreview += '<div class="backet-order__item">';
          orderPreview += '<svg class="icon backet-order__close cartCalcDelete icon-delete-forever jqcart-del-item"><use xlink:href="#icon-delete-forever"></use></svg>';
          orderPreview += '</div>';
          orderPreview += '</div>';
          i++;
        }
      }
      $('.backet-order__wrap').html(orderPreview);
      $('.backet__total').html(subtotal);
      $('.backet__table').html(orderPreview);
      actions.recalcSum();
      //$("input[type='tel']").mask("+7(999)999-99-99");
    },
    showProcess: function (item){
      var $item = item.find('img'),
      startLeft = $item.offset().left,
      startTop = $item.offset().top,
      toLeft = $('.page-header__cart').offset().left,
      toTop = $('.page-header__cart').offset().top;
      $item
        .clone()
        .css({'position' : 'absolute', 'z-index' : '11100', 'top': startTop, 'left':startLeft})
            .appendTo("body")
            .animate({opacity: 0.05,
                left: toLeft,
                top: toTop,
                width: 20}, 1000, function() {
                $(this).remove();
            });
    },
    hideCart: function() {
      $('.jqcart-layout').fadeOut('fast', function() {
        $(this).remove();
      });
      $('.cart').hide();
      isOpen = false;
      return false;
    },
    sendOrder: function(e) {
      e.preventDefault();
      var parent;
      var $form = $(this).parents('form.step');
      var valid = $('.backet-order__label.step__label--terms').hasClass('active');      
      if (!valid) {
        $('.error_tooltip').fadeIn();
        setTimeout(function() {  $('.error_tooltip').hide(); }, 2000);
        return false;
      }
      cartData = actions.getStorage();
      if (methods.isEmptyObject(cartData)) {
        swal({
          type: 'error',
          title: 'Ваша корзина пуста!',
          text: 'Пожалуйста, сначала выберите понравившийся пирог',
        });
        return false;
      }
      $('.btn.step__submit').prop('disabled','disabled');
      $.ajax({
        url: opts.handler,
        type: 'POST',
				dataType: 'json',
        data: {
          orderlist: $.param(actions.getStorage()),
          user_name: $form.find("#form__name").val(),
          user_phone: $form.find("#form__tel").val(),
          address: $form.find("#form__address").val(),
          metro: $form.find('#form__metro option:selected').text(),
          mes: $form.find('.form__textarea').val(),
          pay_method: $.trim($form.find('input[type=radio].step__checkbox:checked').parents('.checkFixBox').text()),
          sale: $('.backet-order__checkbox').prop('checked')
        },
        error: function() {
          $('.btn.step__submit').prop('disabled',false);
        },
        success: function(resp) {
       		if(!resp.errors) {
            //yaCounter48830738.reachGoal('ORDER');
            swal({
              type: 'success',
              title: 'Благодарим Вас!',
              text: 'Мы свяжемся с Вами в ближайшее время',
              showConfirmButton: false,
              timer: 2000
            });
  					setTimeout(function() {$form[0].reset(), methods.clearCart(); actions.showCart(); actions.recalcSum();$('.btn.step__submit').prop('disabled',false);}, 2000);
  				}
        }
      });
    },
    setStorage: function(o) {
      DB.setItem('l6541578653', JSON.stringify(o));
      return false;
    },
    getStorage: function() {
      return JSON.parse(DB.getItem('l6541578653'));
    },
    applyDiscount: function() {
      var max = 0,
      that = $(this).parents('.product__sale');
      that.find('input[name=product-sale1]:checked').each(function(){
        if ($(this).siblings('label').data('price')>max) max = $(this).siblings('label').data('price'); 
      });
      var productBlock = $(this).parents('.product__sale').siblings('.product__about');
      productBlock.find('.product-weight__item').each(function(){
        var weightNumber = $(this).find('.weigtNumber');
        weightNumber.html(productBlock.find('.fieldCount').val()*Math.floor(weightNumber.data('number')/100*(100-max))+'');
      });
      items[$(this).parents('section.product').data('id')].discountValue=max;
      console.log(items[$(this).parents('section.product').data('id')]);

    },
    quickorder: function (e) {
      e.preventDefault();
      var $form = $(this);
      var valid = true;
      var inputname=$form.find("input[name=user_name]");
      if ((inputname.val()=="") && valid) { 
        valid = false;
        inputname.attr("style","border:1px #E82C2C solid!important");
        inputname.val('Вы забыли ввести имя');
        setTimeout(function(){inputname.val(''); inputname.focus(); inputname.attr("style","border: 0px #C0C0C0 solid;");}, 1000);
      }     
      var inputphone=$form.find("input[name=user_phone]");
      if ((inputphone.val()=="") && valid){
        valid = false;
        inputphone.attr("style","border:1px #E82C2C solid!important");
        inputphone.val('Вы забыли указать телефон');
        setTimeout(function(){inputphone.val(''); inputphone.focus(); inputphone.attr("style","border: 0px #C0C0C0 solid;");}, 1000);
      }
      if (!valid) return false;
      $('.form__submit').prop('disabled','disabled');
      $.ajax({
        url: '/send2/',
        type: 'POST',
        dataType: 'json',
        data: {
          user_name: $form.find("input[name=user_name]").val(),
          user_phone: $form.find("input[name=user_phone]").val(),
          message: $form.find("textarea[name=user_message]").val()
        },
        error: function() {
          $('.form__submit').prop('disabled',false);
        },
        success: function(resp) {
          if(!resp.errors) {
            //yaCounter48830738.reachGoal('ORDER');
            swal({
              type: 'success',
              title: 'Благодарим Вас!',
              text: 'Мы свяжемся с Вами в ближайшее время',
              showConfirmButton: false,
              timer: 2000
            });
            setTimeout(function() {$form[0].reset(), methods.clearCart(); actions.showCart(); actions.recalcSum();}, 2000);
            $('.form__submit').prop('disabled',false);
          }
        }
      });
    }
  };
  var methods = {
		clearCart: function(){
			DB.removeItem('l6541578653');
			label[opts.visibleLabel ? 'show' : 'hide']().find('.jqcart-total-cnt').text(0);
			actions.hideCart();
		},
		openCart: actions.openCart,
		printOrder: actions.printOrder,
		test: function(){
			actions.getStorage();
		},
    isEmptyObject: function(obj) {
      for (var i in obj) {
          if (obj.hasOwnProperty(i)) {
              return false;
          }
      }
      return true;
    }
	};
  $.jqCart = function(opts) {
    if (methods[opts]) {
      return methods[opts].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof opts === 'object' || !opts) {
      return actions.init.apply(this, arguments);
    } else {
      $.error('Метод с именем "' + opts + '" не существует!');
    }
  };
})(jQuery);
$(document).mouseup(function (e) {
  var container = $(".jqcart-layout-info");
  if (container.has(e.target).length === 0) {
    container.fadeOut(400);
  }
});

