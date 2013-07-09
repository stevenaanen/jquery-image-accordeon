/*
 * jQuery Image Accordeon v1.0.1
 * http://www.appophetweb.nl
 * https://github.com/stevenaanen/jquery-image-accordeon
 * Copyright 2013, AppOpHetWeb
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

// accordeon plugin
(function( $ ) {
	$.fn.accordeonize = function( options ) {
		// Create some defaults, extending them with any options that were provided
		var settings = $.extend({
			detailsBlock	: ".details-block",
			closeButton		: ".close-button",
			hideTime		: 170,
			showTime		: 280
		}, options);

		// constants
		var $accordeon = this;
		var $detailsBlock = $(settings.detailsBlock);
		var defaultContent = $detailsBlock.first().html();

		// onclick
		this.children().not($detailsBlock).click(function() {
			var $selection = $(this);
			if ($selection.hasClass("active")) return false; // cancel when current active element selected

			// set classes
			$selection.addClass("active");
			$selection.siblings().removeClass("active");

			// execute this when existing content block is hidden
			clearDataPanel(function() {
				$detailsBlock.append(defaultContent)
					.append($selection.children("details").html())
					.slideDown(settings.showTime);

				// bind close button
				$detailsBlock.find(settings.closeButton).click(function() {
					clearDataPanel(function() {
						$selection.removeClass("active");
					});
				});
			});
		});

		var clearDataPanel = function( callback ) {
			$detailsBlock.stop()
				.slideUp(settings.hideTime, function() {
					$(this).empty();
					callback();
				});

		}

		return this;
	};
})( jQuery );


// $(".accordeon").each(function() { $(this).accordeonize({}); });
