$(function(){
	
	(function(){
		
		var id = parseInt($(document.body).attr('data-post-id') || 0);
		
		$('.navbar .navbar-nav a[data-post-id="' + id + '"]').closest('li').addClass('active');
		
	})();
	
	(function(){
		
		$('.azbn-jqfeShowMoreBtn-btn')
			.jqfeShowMoreBtn({
				container:'.azbn-jqfeShowMoreBtn-container',
				items:'.azbn-jqfeShowMoreBtn-item',
				display:'block',
				count:9,
				css_hidden:{
					opacity:0,
				},
				css_visible:{
					opacity:1,
				},
				animation_time:700,
			})
			.trigger('click')
		;
		
	})();
	
	(function(){
		
		var ls = new jsLocalStorage();
		var o = ls.s2obj('portfolio.likes');
		
		if(o) {
			
			$('.portfolio-item-page-content .azbn-project-like-btn')
				.each(function(index){
					
					var btn = $(this);
					var post_id = parseInt(btn.attr('data-post-id') || 0);
					
					if(o[post_id]) {
						
						btn.addClass('is-active');
						
					}
					
				})
			;
			
		} else {
			
			ls.obj2s('portfolio.likes', {});
			
		}
		
	})();
	
	(function(){
		
		var ls = new jsLocalStorage();
		
		$('.portfolio-item-page-content .azbn-project-like-btn')
			.on('click.azbn', function(event){
				event.stopPropagation();
				event.preventDefault();
				
				var btn = $(this);
				var post_id = parseInt(btn.attr('data-post-id') || 0);
				
				var liked = btn.hasClass('is-active');
				var change = 0;
				
				if(liked) {
					
					btn.removeClass('is-active');
					change = -1;
					
				} else {
					
					btn.addClass('is-active');
					change = 1;
					
				}
				
				$.post('/wp-admin/admin-ajax.php',
					{
						'action' : 'azbnajax_call',
						'method' : 'portfolio/like',
						'change' : change,
						'post_id' : post_id,
						'type' : 'json',
					},
					function(data){
						//console.warn(data);
						
						data = JSON.parse(data);
						
						if(data.response && data.response.data && data.response.data.item) {
							
							var item = data.response.data.item;
							
							var _count = btn.find('._count');
							
							if(_count.length == 0) {
								_count = $('<span/>', {
										class : '_count',
								});
								_count.appendTo(btn);
							}
							
							_count.html(item.like_count);
							
							var o = ls.s2obj('portfolio.likes');
							
							if(o[item.post_id]) {
								if(change == 1) {
									
								} else {
									delete o[item.post_id];
								}
							} else {
								if(change == 1) {
									o[item.post_id] = 1;
								} else {
									
								}
							}
							
							ls.obj2s('portfolio.likes', o);
							
						} else {
							console.warn('fail');
						}
						
					}
				);
				
			})
		;
		
	})();
	
	(function(){
		
		$(document.body).on('click.azbn', '.finalFormModal', {}, function(event){
			event.preventDefault();
			
			var btn = $(this);
			var form = btn.closest('form');
			var modal = btn.closest('.modal');
			
			var form_s = form.serialize();
			
			var params = $.extend({}, {
				'action' : 'azbnajax_call',
				'method' : 'form/save',
				'type' : 'json',
				'form' : form_s,
			});
			
			$.post('/wp-admin/admin-ajax.php', params, function(data){
				
				form.trigger('reset');
				
				data = JSON.parse(data);
				
				$('#modal-finalFormModal-result .form-save-result').html(data.response.data.item.title);
				
				modal.modal('hide');
				
				$('#modal-finalFormModal-result').modal('show');
				
			});
			
		});
		
		$(document.body).on('click.azbn', '.finalPanelModal', {}, function(event){
			event.preventDefault();
			
			var btn = $(this);
			var form = btn.closest('form');
			//var modal = btn.closest('.modal');
			
			var form_s = form.serialize();
			
			var params = $.extend({}, {
				'action' : 'azbnajax_call',
				'method' : 'form/save',
				'type' : 'json',
				'form' : form_s,
			});
			
			$.post('/wp-admin/admin-ajax.php', params, function(data){
				
				form.trigger('reset');
				
				data = JSON.parse(data);
				
				$('#modal-finalFormModal-result .form-save-result').html(data.response.data.item.title);
				
				//modal.modal('hide');
				
				$('#modal-finalFormModal-result').modal('show');
				
			});
			
		});
		
	})();
	
	(function(){
		
		$(document.body).on('mousedown', 'img', {}, function(event){
			event.preventDefault();
			if(event.button == 0){
				//Левая кнопка мыши
			} else if(event.button == 1){
				//Колесо
			} else if(event.button == 2){
				//Правая кнопка мыши
				//event.stopPropagation();
			}
			
		});
		
		window.oncontextmenu = (function(e){
			return false;
		});
		
	})();
	
});