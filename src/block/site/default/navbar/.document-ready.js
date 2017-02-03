    /*$(function () {
        // Remove Search if user Resets Form or hits Escape!
		$('body, .navbar-collapse form[role="search"] button[type="reset"]').on('click keyup', function(event) {
			console.log(event.currentTarget);
			if (event.which == 27 && $('.navbar-collapse form[role="search"]').hasClass('active') ||
				$(event.currentTarget).attr('type') == 'reset') {
				closeSearch();
			}
		});

		function closeSearch() {
            var $form = $('.navbar-collapse form[role="search"].active')
    		$form.find('input').val('');
			$form.removeClass('active');
		}

		// Show Search if form is not active // event.preventDefault() is important, this prevents the form from submitting
		$(document).on('click', '.navbar-collapse form[role="search"]:not(.active) button[type="submit"]', function(event) {
			event.preventDefault();
			var $form = $(this).closest('form'),
				$input = $form.find('input');
			$form.addClass('active');
			$input.focus();

		});
    });*/

	/*$(".navbar-hamburger").swipe({
	    swipeStatus:function(event, phase, direction, distance, duration, fingers)
	        {$(this).text("You swiped " + direction ); 
	            if (phase=="move" && direction =="right") {
	                $(".navbar-site ").addClass("open-sidebar");
	                return false;
	            }
	            if (phase=="move" && direction =="left") {
	                 $(".navbar-site ").removeClass("open-sidebar");
	                 return false; 
	            }
	        }
	});*/