$('img').addClass('img-responsive');
$('.text-block ul').addClass('ul-site');
$('.project-step-panel__item-note ul').addClass('ul-site');
var url = window.location.pathname;
$('.navbar-nav a[href="'+url+'"]').parent().addClass('active'); 
/*
$('.navbar-project a[href="'+url+'"]').parent().addClass('active'); 
$('.tabs-block a[href="'+url+'"]').parent().addClass('active'); 
$('._ipc__carousel .item').eq(0).addClass('active');
$('._adpc__carousel .item').eq(0).addClass('active');
$('._ipc__carousel').carousel({
    interval : false
});*/

$('.text-block table').addClass('table table-bordered');
$('.text-block .table.table-bordered').parent().addClass('table-responsive');
$('.text-block img').parent().addClass('_tb__img'); 
/*$('.fancybox').fancybox({
	prevEffect : 'none',
	nextEffect : 'none',
});*/
// конструкция для активации fancybox <a class="fancybox-buttons" data-fancybox-group="button" href="" data-title=""><img src="" alt="" /></a>
/*$('.fancybox-buttons').fancybox({
	openEffect  : 'none',
	closeEffect : 'none',
	prevEffect : 'none',
	nextEffect : 'none',
	closeBtn  : false,
	helpers : {
		title : {
			type : 'inside'
		},
		buttons	: {}
	},
	afterLoad : function() {
		this.title = this.title;
	}
});*/
/*
$("form.form-site").validationEngine(
	'attach', {
		promptPosition : "bottomLeft"
	}
);*/
retinajs();
/*
$('._ipc__list').owlCarousel({
	margin: 20,
	items:8,	
	navText: [],
	//autoplay:true,
	//smartSpeed: 500,
	//autoplayTimeout:10000,
	nav: false,
	dots: false,
	responsive: {
		0:{
			items:3,
			dots: true,
		},
		767:{
			items:8,
		}
	}
});	
$('.getModal').click(function(event){
	event.preventDefault();
	
	var btn = $(this);
	var trg = btn.attr('data-target') || '';
	
	btn.closest('.modal').modal('hide');
	setTimeout(function() {$(trg).modal('show');}, 500)
	//return false;
});

$('#tabs li').eq(0).on('click', function(){
  	$(this).parent().removeClass("off").addClass('on'); 
  	$(this).closest("._iab__backlight").removeClass("off").addClass('on');  
});
$('#tabs li').eq(1).on('click', function(){
  	$(this).parent().removeClass("on").addClass('off');   	
  	$(this).closest("._iab__backlight").removeClass("on").addClass('off');  
});*/

$('.btn-journal').on('click', function(){
  	$(this).toggleClass('is-active');
  	$("._dipc__journal-list").toggleClass('is-visible');  
});