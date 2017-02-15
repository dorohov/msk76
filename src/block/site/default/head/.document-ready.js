$('img').addClass('img-responsive');
$('.text-block ul').addClass('ul-site');
$('.project-step-panel__item-note ul').addClass('ul-site');
var url = window.location.pathname;
$('.navbar-nav a[href="'+url+'"]').parent().addClass('active'); 


$('.text-block table').addClass('table table-bordered');
$('.text-block .table.table-bordered').parent().addClass('table-responsive');
$('.text-block img').parent().addClass('_tb__img'); 
$('#tabs li').eq(0).on('click', function(){
  	$(this).parent().removeClass("off").addClass('on'); 
  	$(this).closest("._iab__backlight").removeClass("off").addClass('on');  
});
$('#tabs li').eq(1).on('click', function(){
  	$(this).parent().removeClass("on").addClass('off');   	
  	$(this).closest("._iab__backlight").removeClass("on").addClass('off');  
});
$('.btn-journal').on('click', function(){
  	$(this).toggleClass('is-active');
  	$("._dipc__journal-list").toggleClass('is-visible');  
});
retinajs();

/*
$('.getModal').click(function(event){
	event.preventDefault();
	
	var btn = $(this);
	var trg = btn.attr('data-target') || '';
	
	btn.closest('.modal').modal('hide');
	setTimeout(function() {$(trg).modal('show');}, 500)
	//return false;
});

*/
