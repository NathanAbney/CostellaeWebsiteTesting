/*

@authors Mason Flannery
		 Nathan Abney


This file contains site-wide js functions and
links to the itch.io API.

*/

//our api key
var key = ""; 

/*links to itch page, returns {
			@val 'cover_url'  		- image
			@val 'created_at' 		- date
			@val 'downloads_count'	- integer
			@val 'id' - id #
			@val 'min-price' 		- double
			@val 'p_android' 		- bool, if available
			@val 'p_linux' 			- bool, if available
			@val 'p_osx' 			- bool, if available
			@val 'p_windows' 		- bool, if available
			@val 'published' 		- bool
			@val 'published_at' 	- date
			@val 'purchases_count' 	- integer
			@val 'short-text' 		- string, description
			@val 'title' 			- string, returns title
			@val 'type'
			@val 'url' 				- url, string
			@val 'views_count' 		- integer
			@val 'earnings'
									- 'currency' - currency type
									- 'amount_formatted' -$xx.xx
									- 'amount' -unformatted, xxxx
		}
		*/

function loadGames() {

	a=$.ajax({

		url: 'https://itch.io/api/1/' + key + '/my-games', async:false,

	}).done(function(data) {

		//this would do something

	}).fail(function(error) {

		console.log("Error retrieving data");
		return; //ends the function
	});
}