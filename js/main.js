$(document).ready(function(){

	TweenMax.set(['.anim-00 img, .phone-screen_anim-02'], {autoAlpha: 1});				
	
	enquire.register("screen and (min-width: 769px)", {

		match: function(){

			initScrollMagic();

		},
		unmatch: function(){

			controller.destroy(true);
			$('*').removeAttr('style');

		}

	})

	function initScrollMagic(){

		// Init ScrollMagic
		controller = new ScrollMagic.Controller();

		// Pin Mobile Screen
		var pinMobile = new ScrollMagic.Scene({
			triggerElement: '#phone-floater-container',
			triggerHook: 0,
			duration: '1600'
		})
		.setPin('#phone-floater-container .pin-wrapper', {pushFollowers: false})
		// .addIndicators()
		.addTo(controller);

		// Pin Mobile Scene 1
		var pinScene01 = new ScrollMagic.Scene({
			triggerElement: '#phone-floater-container',
			triggerHook: 0.4,
			duration: '150'
		})
		.setTween(getMobileSlide01Tl())
		// .addIndicators()
		.addTo(controller);
	}
});
