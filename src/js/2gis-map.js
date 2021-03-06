if(document.getElementById('2gis-map')) {
	var map;
	DG.then(function () {
		map = DG.map('2gis-map', {
			center: [52.97545, 36.0985],
			zoom: 18,
			scrollWheelZoom: false,
			fullscreenControl: false
		});
		var myIcon = DG.icon({
			iconUrl: '/wp-content/themes/azbnbasetheme/img/icon/icon-map.png',//'/img/icon/icon-map.png',
			iconRetinaUrl: '/wp-content/themes/azbnbasetheme/img/icon/icon-map.png',//'/img/icon/icon-map.png',
			iconSize: [105, 125],
			iconAnchor: [14, 125],
			popupAnchor: [0, 0]
		});
		DG.marker([52.975027, 36.098462], {icon: myIcon}).addTo(map).bindPopup('ул. Московская, д.76');
	});
}