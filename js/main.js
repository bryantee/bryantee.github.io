$(document).ready(function() {
	$('.heading, .tagline, .social').delay(500).css('display', 'visibility').hide().delay(100).fadeIn('slow');

	// Make call to strava and set YTD info as variable
	getStrava();

});

function appendStrava(miles, elevation) {
	miles = Number(miles).toLocaleString('en');
	elevation = Number(elevation).toLocaleString('en');

	$('#miles').append(miles + ' mi')
	$('#elevation').append(elevation + ' ft');

	// countUp.js attempt

/*	var options = {
		useEasing: true,
		seperator: ',',
		prefix: '',
		suffix: ''
	};

	var stravaMiles = new CountUp("#miles", 0, 20, 0, 4);
	var stravalElevation = new CountUp("#elevation", 0, 15, 0, 4);

	stravaMiles.start();
	stravalElevation.start();	*/



}

function getStrava() {
	$.getJSON('https://www.strava.com/api/v3/athletes/3076072/stats?access_token=5c9386df1ea0ae7be4002f15222998e4005dfa24&callback=?', function(data) {
		console.log('successful Strava API call');
		rideTotals = data.ytd_ride_totals;
		totalMiles = parseInt(rideTotals.distance * 0.000621371);
	 	totalElevation = parseInt(rideTotals.elevation_gain * 3.28084);
	 	//append to dom, call function
	 	appendStrava(totalMiles, totalElevation);
	});

}