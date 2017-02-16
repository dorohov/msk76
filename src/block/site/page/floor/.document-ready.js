(function(){
	
	var leavetimeout;
	
	/*$(document.body).on('azbn.azbn-layouts-content.hide', '.azbn-layouts-content', {}, function(event){
		event.preventDefault();
		
		var block = $(this);
		var note = block.find('.azbn-layout-note');
		var panel = block.find('.azbn-layout-panel');
		
		//panel.fadeOut(150);
		//note.fadeIn(150);
		panel.toggleClass("is-visible is-hidden");
		note.toggleClass("is-hidden is-visible");
		
		block.attr('data-status', 0);
		
	});
	
	$(document.body).on('azbn.azbn-layouts-content.setStatus', '.azbn-layouts-content', {}, function(event, status, floor, qty, qtyOne, qtyTwo, qtyThree){
		event.preventDefault();
		
		var block = $(this);
		var note = block.find('.azbn-layout-note');
		var panel = block.find('.azbn-layout-panel');
		
		var _s = parseInt(block.attr('data-status')) || 0;
		
		window.clearTimeout(leavetimeout);
		
		if(status) {
			panel.find('.azbn-num').html(floor);
			panel.find('.azbn-qty').html(qty);
			panel.find('.azbn-qty-one').html(qtyOne);
			panel.find('.azbn-qty-two').html(qtyTwo);
			panel.find('.azbn-qty-three').html(qtyThree);
			
			if(_s == 0) {
				//note.hide();
				//panel.fadeIn(150);
				panel.toggleClass("is-visible is-hidden");
				note.toggleClass("is-hidden is-visible ");
			} else {
				
			}
		} else {
			//panel.hide();
			//note.fadeIn(150);
			panel.toggleClass("is-visible is-hidden");
			note.toggleClass("is-hidden is-visible ");
		}
		
		block.attr('data-status', status);
		
	});
	
	$(document.body).on('mouseenter.azbn', '.azbn-layouts-content svg.layout-svg .layout-polygon', {}, function(event){
		event.preventDefault();
		
		var block = $(this);
		var floor = parseInt(block.attr('data-floor')) || 0;
		var qty = parseInt(block.attr('data-qty')) || 0;
		var qtyOne = parseInt(block.attr('data-qty-one')) || 0;
		var qtyTwo = parseInt(block.attr('data-qty-two')) || 0;
		var qtyThree = parseInt(block.attr('data-qty-three')) || 0;
		
		$('.azbn-layouts-content').trigger('azbn.azbn-layouts-content.setStatus', [1, floor, qty, qtyOne, qtyTwo, qtyThree]);
		
	});
	
	$(document.body).on('mouseleave.azbn', '.azbn-layouts-content svg.layout-svg .layout-polygon', {}, function(event){
		event.preventDefault();
		
		var block = $(this);
		var floor = parseInt(block.attr('data-floor')) || 0;
		
		leavetimeout = setTimeout(function(){
			$('.azbn-layouts-content').trigger('azbn.azbn-layouts-content.hide');
		}, 250);
		
	});*/
	
	$(document.body).on('click.azbn', '.azbn-floor-content svg .floor-polygon', {}, function(event){
		event.preventDefault();
		
		var block = $(this);
		var floor = parseInt(block.attr('data-apartment-id')) || 0;
		
		var _href = $('.azbn-floor-content').attr('data-base-url') || '';
		
		window.location.href = _href + floor;
		
	});
	
	$('.azbn-floor-content').trigger('azbn.azbn-floor-content.setStatus', [0, 0]);
	
})();