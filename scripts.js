//Create variable for Search button
const searchTitleButton = document.querySelector('.btn-primary');

//Create variable for input form
const enter = document.getElementById('form-control');

function searchWiki () {
	//Create variable for the search terms
	const searchTitle = $('.form-control').val();
	//Add the search terms to the API endpoint
	const targetUrl = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + encodeURI(searchTitle) + "&format=json&callback=?";
	//Reset the input field
	$('.form-control').val('');
	//Reset the generated data upon new submit
	$('.generated').remove();


	$.getJSON(targetUrl, function(jsondata) {
	//Output selected data from array
	for (a = 0; a < 10; a++){
		//Create variables from JSON for url, title and article
		const aUrl = jsondata[3][a];
		const aTitle = jsondata[1][a];
		const aArticle = jsondata[2][a];
		$('.content').append(
			"<div class='row generated bg-info text-white'><a class='text-white' href='" + aUrl + "' target='_blank'><h2>" +
			 aTitle + "</h2></a><p>" + aArticle + "</p></div>");
		}
	});
};

//Event listener on Search button
searchTitleButton.addEventListener('click', searchWiki);

//Event listener on input field for "Enter" key (#13)
enter.addEventListener('keyup', function(event){
	event.preventDefault();
	if (event.keyCode === 13)
		document.getElementById('btn-primary').click();
})