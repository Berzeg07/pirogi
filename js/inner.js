$(document).ready(function() {


    if (window.matchMedia('(max-width: 991px)').matches) {
        // do functionality on screens smaller than 768px
        $('#productSlider').lightSlider({
            gallery: true,
            item: 1,
            vertical: false,
            // adaptiveHeight: true,
            // verticalHeight: 196,
            slideMargin: 5
        });
    }
    if (window.matchMedia('(min-width: 992px)').matches) {
        $('#productSlider').lightSlider({
            gallery: true,
            item: 1,
            vertical: true,
            adaptiveHeight: true,
            loop: true,
            verticalHeight: 520,
            vThumbWidth: 117,
            thumbItem: 8,
            thumbMargin: 4,
            slideMargin: 0
        });
    }

    $(function() {
        $('.calcCheckbox').click(function() {
            if (!$(this).hasClass('active')) {
                $(this).addClass('active');
                $(this).siblings('.calcCheckbox').each(function(n) {
                    $(this).removeClass('active');
                });
                var price = $(this).find('.calcWeightNumber').text() * 1,
                    count = $(this).parents('.product__item').find('.product__count-number').text() * 1;
                $(this).parents('.product__item').find('.calcNumber').text(price * count);
            }
        });
        $('.calcBtn.product__btn').click(function() {
            var price = $(this).parents('.product__item').find('.calcCheckbox.active').find('.calcWeightNumber').text() * 1,
                count = $(this).siblings('.product__count-number').text() * 1;
            if ($(this).hasClass('calcDec')) {
                if (count > 1) {
                    count--;
                    $(this).siblings('.product__count-number').text(count);
                    $(this).parents('.product__item').find('.calcNumber').text(price * count);
                }
            } else {
                count++;
                $(this).siblings('.product__count-number').text(count);
                $(this).parents('.product__item').find('.calcNumber').text(price * count);
            }
        });
    });
});
