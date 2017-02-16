$(function(){
	
	window.houseData = {};
	
	$(document.body).on('azbn.load.houseData', null, {}, function(event){
		
		var p = window.location.href.split('?');
		
		if(p.length > 1) {
			
			var p_str = p[1];
			//console.log(p_str);
			
			var p_o = {};
			var p_get = p[1].split('&');
			if(p_get.length) {
				
				for(i = 0; i < p_get.length; i++) {
					var _ = p_get[i].split('=');
					p_o[_[0]] = parseInt(_[1]);
				}
				
				if(p_o['floor_id']) {
					
					console.log('этаж выбран! ' + p_o['floor_id']);
					
					$('.azbn-floor-num-selected').html(p_o['floor_id']);
					
					var img_index = p_o['floor_id'];
					
					if(img_index > 2 && img_index < 6) {
						img_index = '3-5';
					}
					
					if(img_index > 5 && img_index < 10) {
						img_index = '6-9';
					}
					
					if(img_index > 9) {
						img_index = '10-12';
					}
					
					//$('#svg-bg image').attr('xlink:href', '/img/layouts/bg-apartment-' + img_index + '.png')
					
					$.ajax({
						url : '/img/svg/floors/' + img_index + '.svg',
						type : 'GET',
						dataType : 'text',
						success : function(data){
							var oldsvg = $('svg.floor-svg');
							$(data).insertAfter(oldsvg);
							oldsvg.empty().remove();
						}
					});
					
					
					var flats = window.houseData.floor[p_o['floor_id']];
					
					console.log(flats);
					
				}
				
				if(p_o['flat_id']) {
					
					console.log('квартира выбрана! ' + p_o['flat_id']);
					
					var flat = window.houseData.points[p_o['flat_id']];
					//console.log(flat);
					
					var layout_id = flat.layout;
					var layout = window.houseData.layouts[layout_id];
					var flat_d = layout.layoutstoreys[0];
					
					var img = flat_d.flat_image;
					
					$('.azbn-apartment-img-view').attr('src', img);
					
					
				}
				
			}
			
		}
		
	});
	
	$.getJSON('/json/content/houseData.json', function(data){
		window.houseData = data;
		$(document.body).trigger('azbn.load.houseData');
	});
	
});