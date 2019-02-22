/*
	Thank you to "html5up.net | @ajlkn" for the initial template
*/

(function($) {

	var	$window = $(window),
		$body = $('body'),
		$header = $('#header'),
		$banner = $('#banner');

	// Breakpoints.
		breakpoints({
			xlarge:	'(max-width: 1680px)',
			large:	'(max-width: 1280px)',
			medium:	'(max-width: 980px)',
			small:	'(max-width: 736px)',
			xsmall:	'(max-width: 480px)'
		});

	// Play initial animations on page load.
		$window.on('load', function() {
			window.setTimeout(function() {
				$body.removeClass('is-preload');
			}, 100);
		});

	// Header.
		if ($banner.length > 0
		&&	$header.hasClass('alt')) {

			$window.on('resize', function() { $window.trigger('scroll'); });

			$banner.scrollex({
				bottom:		$header.outerHeight(),
				terminate:	function() { $header.removeClass('alt'); },
				enter:		function() { $header.addClass('alt'); },
				leave:		function() { $header.removeClass('alt'); }
			});

		}

	// overlay.
		var $overlay = $('#overlay');

		$overlay._locked = false;

		$overlay._lock = function() {

			if ($overlay._locked)
				return false;

			$overlay._locked = true;

			window.setTimeout(function() {
				$overlay._locked = false;
			}, 350);

			return true;

		};

		$overlay._show = function() {

			if ($overlay._lock())
				$body.addClass('is-overlay-visible');

		};

		$overlay._hide = function() {

			if ($overlay._lock())
				$body.removeClass('is-overlay-visible');

		};

		$overlay._toggle = function() {

			if ($overlay._lock())
				$body.toggleClass('is-overlay-visible');

		};

		$overlay
			.appendTo($body)
			.on('click', function(event) {

				event.stopPropagation();

				// Hide.
					$overlay._hide();

			})
			.find('.inner')
				.on('click', '.close', function(event) {

					event.preventDefault();
					event.stopPropagation();
					event.stopImmediatePropagation();

					// Hide.
						$overlay._hide();

				})
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$overlay._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				});

		$body
			.on('click', 'a[href="#overlay"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$overlay._toggle();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$overlay._hide();

			});


// overlay2

var $overlay2 = $('#overlay2');

		$overlay2._locked = false;

		$overlay2._lock = function() {

			if ($overlay2._locked)
				return false;

			$overlay2._locked = true;

			window.setTimeout(function() {
				$overlay2._locked = false;
			}, 350);

			return true;

		};

		$overlay2._show = function() {

			if ($overlay2._lock())
				$body.addClass('is-overlay2-visible');

		};

		$overlay2._hide = function() {

			if ($overlay2._lock())
				$body.removeClass('is-overlay2-visible');

		};

		$overlay2._toggle = function() {

			if ($overlay2._lock())
				$body.toggleClass('is-overlay2-visible');

		};

		$overlay2
			.appendTo($body)
			.on('click', function(event) {

				event.stopPropagation();

				// Hide.
					$overlay2._hide();

			})
			.find('.inner')
				.on('click', '.close', function(event) {

					event.preventDefault();
					event.stopPropagation();
					event.stopImmediatePropagation();

					// Hide.
						$overlay2._hide();

				})
				.on('click', function(event) {
					event.stopPropagation();
				})
				.on('click', 'a', function(event) {

					var href = $(this).attr('href');

					event.preventDefault();
					event.stopPropagation();

					// Hide.
						$overlay2._hide();

					// Redirect.
						window.setTimeout(function() {
							window.location.href = href;
						}, 350);

				});

		$body
			.on('click', 'a[href="#overlay2"]', function(event) {

				event.stopPropagation();
				event.preventDefault();

				// Toggle.
					$overlay2._toggle();

			})
			.on('keydown', function(event) {

				// Hide on escape.
					if (event.keyCode == 27)
						$overlay2._hide();

			});

// overlay3

var $overlay3 = $('#overlay3');

$overlay3._locked = false;

$overlay3._lock = function() {

	if ($overlay3._locked)
		return false;

	$overlay3._locked = true;

	window.setTimeout(function() {
		$overlay3._locked = false;
	}, 350);

	return true;

};

$overlay3._show = function() {

	if ($overlay3._lock())
		$body.addClass('is-overlay3-visible');

};

$overlay3._hide = function() {

	if ($overlay3._lock())
		$body.removeClass('is-overlay3-visible');

};

$overlay3._toggle = function() {

	if ($overlay3._lock())
		$body.toggleClass('is-overlay3-visible');

};

$overlay3
	.appendTo($body)
	.on('click', function(event) {

		event.stopPropagation();

		// Hide.
			$overlay3._hide();

	})
	.find('.inner')
		.on('click', '.close', function(event) {

			event.preventDefault();
			event.stopPropagation();
			event.stopImmediatePropagation();

			// Hide.
				$overlay3._hide();

		})
		.on('click', function(event) {
			event.stopPropagation();
		})
		.on('click', 'a', function(event) {

			var href = $(this).attr('href');

			event.preventDefault();
			event.stopPropagation();

			// Hide.
				$overlay3._hide();

			// Redirect.
				window.setTimeout(function() {
					window.location.href = href;
				}, 350);

		});

$body
	.on('click', 'a[href="#overlay3"]', function(event) {

		event.stopPropagation();
		event.preventDefault();

		// Toggle.
			$overlay3._toggle();

	})
	.on('keydown', function(event) {

		// Hide on escape.
			if (event.keyCode == 27)
				$overlay3._hide();

	});


// overlay4

var $overlay4 = $('#overlay4');

$overlay4._locked = false;

$overlay4._lock = function() {

	if ($overlay4._locked)
		return false;

	$overlay4._locked = true;

	window.setTimeout(function() {
		$overlay4._locked = false;
	}, 350);

	return true;

};

$overlay4._show = function() {

	if ($overlay4._lock())
		$body.addClass('is-overlay4-visible');

};

$overlay4._hide = function() {

	if ($overlay4._lock())
		$body.removeClass('is-overlay4-visible');

};

$overlay4._toggle = function() {

	if ($overlay4._lock())
		$body.toggleClass('is-overlay4-visible');

};

$overlay4
	.appendTo($body)
	.on('click', function(event) {

		event.stopPropagation();

		// Hide.
			$overlay4._hide();

	})
	.find('.inner')
		.on('click', '.close', function(event) {

			event.preventDefault();
			event.stopPropagation();
			event.stopImmediatePropagation();

			// Hide.
				$overlay4._hide();

		})
		.on('click', function(event) {
			event.stopPropagation();
		})
		.on('click', 'a', function(event) {

			var href = $(this).attr('href');

			event.preventDefault();
			event.stopPropagation();

			// Hide.
				$overlay4._hide();

			// Redirect.
				window.setTimeout(function() {
					window.location.href = href;
				}, 350);

		});

$body
	.on('click', 'a[href="#overlay4"]', function(event) {

		event.stopPropagation();
		event.preventDefault();

		// Toggle.
			$overlay4._toggle();

	})
	.on('keydown', function(event) {

		// Hide on escape.
			if (event.keyCode == 27)
				$overlay4._hide();

	});


// overlay5

var $overlay5 = $('#overlay5');

$overlay5._locked = false;

$overlay5._lock = function() {

	if ($overlay5._locked)
		return false;

	$overlay5._locked = true;

	window.setTimeout(function() {
		$overlay5._locked = false;
	}, 350);

	return true;

};

$overlay5._show = function() {

	if ($overlay5._lock())
		$body.addClass('is-overlay5-visible');

};

$overlay5._hide = function() {

	if ($overlay5._lock())
		$body.removeClass('is-overlay5-visible');

};

$overlay5._toggle = function() {

	if ($overlay5._lock())
		$body.toggleClass('is-overlay5-visible');

};

$overlay5
	.appendTo($body)
	.on('click', function(event) {

		event.stopPropagation();

		// Hide.
			$overlay5._hide();

	})
	.find('.inner')
		.on('click', '.close', function(event) {

			event.preventDefault();
			event.stopPropagation();
			event.stopImmediatePropagation();

			// Hide.
				$overlay5._hide();

		})
		.on('click', function(event) {
			event.stopPropagation();
		})
		.on('click', 'a', function(event) {

			var href = $(this).attr('href');

			event.preventDefault();
			event.stopPropagation();

			// Hide.
				$overlay5._hide();

			// Redirect.
				window.setTimeout(function() {
					window.location.href = href;
				}, 350);

		});

$body
	.on('click', 'a[href="#overlay5"]', function(event) {

		event.stopPropagation();
		event.preventDefault();

		// Toggle.
			$overlay5._toggle();

	})
	.on('keydown', function(event) {

		// Hide on escape.
			if (event.keyCode == 27)
				$overlay5._hide();

	});

// overlay6

var $overlay6 = $('#overlay6');

$overlay6._locked = false;

$overlay6._lock = function() {

	if ($overlay6._locked)
		return false;

	$overlay6._locked = true;

	window.setTimeout(function() {
		$overlay6._locked = false;
	}, 350);

	return true;

};

$overlay6._show = function() {

	if ($overlay6._lock())
		$body.addClass('is-overlay6-visible');

};

$overlay6._hide = function() {

	if ($overlay6._lock())
		$body.removeClass('is-overlay6-visible');

};

$overlay6._toggle = function() {

	if ($overlay6._lock())
		$body.toggleClass('is-overlay6-visible');

};

$overlay6
	.appendTo($body)
	.on('click', function(event) {

		event.stopPropagation();

		// Hide.
			$overlay6._hide();

	})
	.find('.inner')
		.on('click', '.close', function(event) {

			event.preventDefault();
			event.stopPropagation();
			event.stopImmediatePropagation();

			// Hide.
				$overlay6._hide();

		})
		.on('click', function(event) {
			event.stopPropagation();
		})
		.on('click', 'a', function(event) {

			var href = $(this).attr('href');

			event.preventDefault();
			event.stopPropagation();

			// Hide.
				$overlay6._hide();

			// Redirect.
				window.setTimeout(function() {
					window.location.href = href;
				}, 350);

		});

$body
	.on('click', 'a[href="#overlay6"]', function(event) {

		event.stopPropagation();
		event.preventDefault();

		// Toggle.
			$overlay6._toggle();

	})
	.on('keydown', function(event) {

		// Hide on escape.
			if (event.keyCode == 27)
				$overlay6._hide();

	});

})(jQuery);