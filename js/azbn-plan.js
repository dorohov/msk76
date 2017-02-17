$(function(){
	
	window.houseData = {};
	
	var __getHumanNum = function(i) {
		return ('' + i).replace('.', ','); 
	}
	
	Number.prototype.triads = function(sep, dot, frac){
		sep = sep || String.fromCharCode(160);
		dot = dot || ',';
		if(typeof frac == 'undefined') {
			frac = 0;
		}

		var num = parseInt(this).toString();

		var reg = /(-?\d+)(\d{3})/;
		while(reg.test(num)) {
			num = num.replace(reg, '$1' + sep + '$2');
		}

		if(!frac) {
			return num;
		}
		
		var a = this.toString();
		
		if(a.indexOf('.') >= 0) {
			a = a.toString().substr(a.indexOf('.') + 1, frac);
			a += Array(frac - a.length + 1).join('0');
		} else {
			a = Array(frac + 1).join('0');
		}
		
		return num + dot + a;
	}
	
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
					
					$('.azbn-floor-col-item[data-floor_id="' + p_o['floor_id'] + '"]').addClass('active');
					
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
					
					$('.azbn-go2-floor-link').on('click.azbn', function(event){
						event.preventDefault();
						
						window.location.href = '/layouts-floor.html?floor_id=' + flat.floor;
						
					});
					
					var img = flat_d.flat_image;
					
					$('.azbn-apartment-img-view').attr('src', img);
					
					$('.azbn__layouts__rooms_number').html(layout.rooms_number);
					
					$('.azbn__layouts__total_area').html(__getHumanNum(layout.total_area));
					$('.azbn__layouts__living_area').html(__getHumanNum(layout.living_area));
					$('.azbn__layouts__layoutstoreys__kitchen_area').html(__getHumanNum(flat_d.kitchen_area));
					
					$('.azbn__points__price').html(flat.price.triads());
					$('.azbn__points__price__of_m2').html((Math.ceil(flat.price / layout.total_area)).triads());
					
					if(flat.is_sold) {
						$('.azbn__points__free').empty().remove();
						$('.azbn__points__is_reserved').empty().remove();
					} else if(flat.is_reserved) {
						$('.azbn__points__free').empty().remove();
						$('.azbn__points__is_sold').empty().remove();
					} else {
						$('.azbn__points__is_reserved').empty().remove();
						$('.azbn__points__is_sold').empty().remove();
					}
					
				}
				
			}
			
		}
		
	});
	
	$.getJSON('/json/content/houseData.json', function(data){
		window.houseData = data;
		$(document.body).trigger('azbn.load.houseData');
	});
	
});