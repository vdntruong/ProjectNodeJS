(function($) {
	$(function() {
		bindDOMEvents();
	});

	// global variables
	var a,
		b,
		c,
		MAX = 500;

	function bindDOMEvents() {
		$('input').on('keydown', function(e) {
			var key = e.which || e.keyCode;
			if (key == 13) {
				showYeah();
			}
		});
	}

	// something here... handle function
	function showYeah() {
		alert('Hello Everyone!');
	}
})(jQuery);
