(function ($) {
	"use strict";

	function sliders() {
	}

	/* Init Elementor Front Scripts */
	$(window).on('elementor/frontend/init', function () {

		// Widgets
		elementorFrontend.hooks.addAction( 'frontend/element_ready/courtney-hero-slider.default', function() {
			//sliders()
		} );

		elementorFrontend.hooks.addAction( 'frontend/element_ready/courtney-cta.default', function() {

		} );

		// Global
		elementorFrontend.hooks.addAction( 'frontend/element_ready/global', function( $scope ) {
			
		} );
		elementorFrontend.hooks.addAction( 'frontend/element_ready/widget', function( $scope ) {
			//update swiper
			//sliders();

			//after small banner
			var milSB = $('.mil-small-banner');
			if(milSB.length){
				milSB.closest('.elementor-section').next().find('.elementor-container').addClass('mil-content-frame'); 
			}
		} );
	});
})(jQuery);
