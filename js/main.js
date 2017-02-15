(function(){
	var map, marker;

	function initMap() {
		map = new google.maps.Map(document.querySelector('.map-wrapper'),
				{
					center: { lat: 42.983233, lng: -81.250688 },
					zoom:14
				}
			);

		marker = new google.maps.Marker({
			postion : { lat: 42.983233, lng: -81.250688 },
			map:map,
			title: 'Hello World'
		});
	}
	initMap();

})();