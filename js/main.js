$(document).ready(function() {
	//$('.heading, .tagline, .social').delay(500).css('display', 'visibility').hide().delay(100).fadeIn('slow');

	// Make call to strava and set YTD info as variable
	getStrava();

	// Append and setup scroll to task
	var waypoint = new Waypoint({
		element: document.getElementById('strava-area'),
		handler: function() {
			appendStrava(totalMiles, totalElevation);
		}
	});

});

var totalMiles = 0;
var totalElevation = 0;

function appendStrava(miles, elevation) {
	var miles = Number(miles).toLocaleString('en');
	var elevation = Number(elevation).toLocaleString('en');

	// $('#miles').append(miles + ' mi')
	// $('#elevation').append(elevation + ' ft');

	// countUp.js attempt

	var options = {
		useEasing: true,
		seperator: ',',
		prefix: '',
		suffix: ''
	};

	var stravaMiles = new CountUp("miles", 0, miles, 0, 4, options);
	var stravalElevation = new CountUp("elevation", 0, elevation, 0, 4, options);

	stravaMiles.start();
	stravalElevation.start();	



}

function getStrava() {
	$.getJSON('https://www.strava.com/api/v3/athletes/3076072/stats?access_token=5c9386df1ea0ae7be4002f15222998e4005dfa24&callback=?', function(data) {
		console.log('successful Strava API call');
		rideTotals = data.ytd_ride_totals;
		totalMiles = parseInt(rideTotals.distance * 0.000621371);
	 	totalElevation = parseInt(rideTotals.elevation_gain * 3.28084);
	 	
	});

}