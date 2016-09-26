(function($){

itemsNumber = 0;

$(".product-add-to-cart-button").click(function() {

	var cart = $(".cart-img");
	var flyingImg = $(this).closest('.product-div').find("img");

	if(flyingImg) {
		flyToCart(flyingImg, cart);
	}
	
	
	setTimeout(function() {
		itemsNumber++;
		$(".cart-items-number-text").text(itemsNumber);
	}, 1000);
	
});


function flyToCart(flyingImg, cart) {

	var imgClone = flyingImg.parent()
				.clone()
				.offset({
					top: flyingImg.offset().top,
					left: flyingImg.offset().left
				})
				.css({
					'opacity': '0.5',
				    'position': 'absolute',
				    'height': '250px',
				    'width': '150px',
				    'z-index': '100'
				})
				.appendTo($('body'))
				.animate({
					'top': cart.offset().top ,
				    'left': cart.offset().left,
				    'width': 1,
				    'height': 1
				}, 1000);

	setTimeout(function () {
		cart.effect("shake", {
			times: 2
		}, 200);
	}, 700);

	imgClone.animate({ 
						'width': 0,
						'height': 0
					}, 
					function() {
						$(this).detach();
					});
	}

	

})(jQuery);
