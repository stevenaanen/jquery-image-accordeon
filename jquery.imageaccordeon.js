/*
 * jQuery Image Accordeon 0.0.1
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
			data            : "no data",
			appendAfter     : 4,
			closeButton     : true,
			hideTime        : 300,
			showTime        : 400
		}, options);

		// constants
		var contentWrapper = "<li class=\"content-block\"></li>";
		var defaultContent = "<a class=\"close-button\">×</a>";
		var $accordeon = this;

		// init
		// create content block
		var appendAfter = settings.appendAfter;
		if (this.children().size() < appendAfter) appendAfter = this.children().size();
		var $contentBlock = this.children().eq(appendAfter - 1).after(contentWrapper).next().hide();

		// onclick
		this.children().not($contentBlock).click(function() {
			var $selection = $(this);
			if ($selection.hasClass("active")) return false; // cancel when current active element selected

			// set classes
			$selection.addClass("active");
			$selection.siblings().removeClass("active");

			// execute this when existing content block is hidden
			clearDataPanel(function() {
				$contentBlock.append(defaultContent)
					.append($selection.children("details").html())
					.slideDown(settings.showTime);

				// bind close button
				$contentBlock.find(".close-button").click(function() {
					clearDataPanel(function() {
						$accordeon.children().removeClass("active");
					});
				});
			});
		});

		var clearDataPanel = function( callback ) {
			$contentBlock.stop()
				.slideUp(settings.hideTime, function() {
					$(this).empty();
					callback();
				});

		}

		return this;
	};
})( jQuery );


// $(".accordeon").each(function() { $(this).accordeonize({}); });
