$(document).ready(function() {
	$('.heading, .tagline, .social').delay(500).css('display', 'visibility').hide().fadeIn('slow');
});

function getStrava() {

	var params = {
		client_id: 5556,
		response_type: 'code',
		redirect_uri: 'http://bryanswagerty.com'
	};
	
	url = 'https://www.strava.com/oauth/authorize';

	$.getJSON(url, params, function(data) {
		console.log('success');
	});

}