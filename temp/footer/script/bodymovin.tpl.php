<script src="<?=$this->path('js');?>/spin.min.js"></script>
<script>
	if(typeof Spinner != 'undefined') {
		var opts = {
			lines: 11, 
			length: 24, 
			width: 9, 
			radius: 29, 
			scale: 1, 
			corners: 1, 
			color: '#8bcee4', 
			opacity: 0.2, 
			rotate: 0, 
			direction: 1, 
			speed: 1, 
			trail: 60, 
			fps: 20, 
			zIndex: 2e9, 
			className: 'spinner',  
			top: '50%', 
			left: '50%', 
			shadow: false,
			hwaccel: false,
			position: 'absolute'
		};
		var target = document.getElementById('_czr__spinner')
		var spinner = new Spinner(opts).spin(target);				
	}
</script>