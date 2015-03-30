// http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=cvxzq8aqycmqap7hz4dftef5&q=Toy%20Story

//var baseUrl = "http://api.rottentomatoes.com/api/public/v1.0/movies.json?";
var searchUrl = "http://www.omdbapi.com/?t=";

var myapikey = "cvxzq8aqycmqap7hz4dftef5";

$('form').submit(function(e) {
	console.log("submitting");
	e.preventDefault();

	scrollDown();

	// construct the uri with apikey

	// var moviesSearchUrl = baseUrl + 'apikey=' + myapikey;
	var searchQuery = $( "#movieName" ).val();
	
	// send query
	$.ajax({
		url: searchUrl + encodeURI(searchQuery),
		success: function(data) {
			// body...
			console.log(data.Title);
			console.log(data.Plot);
			console.log(data.Poster);
			// searchCallback(data);
		},
		error: function(response) {
			console.log(response)
		}
		
	});

});


//http://img.omdbapi.com/?apikey=[yourkey]&

$("form").submit(function(e){
	e.preventDefault()
var input = $("#movieName").val() 

	$.getJSON("http://www.omdbapi.com/?t=" + input, function(data){
	console.log(data);

	console.log(data.Title);
	var movieName = data.Title
	$("#title").text("p" + data.Title);

	var img = data.Img
	$("#poster").attr("src", data.Poster );

	$("#plot").text("p" + data.Plot);

	});
})




function scrollDown() {
	$("html, body").animate({
 	  scrollTop: $(document).height()
  	}, "slow");
}

// callback for when we get back the results
function searchCallback(data) {
	$("#movieForm".innerHTML = x)
	$("#movieForm").html('I Found ' + data.total + ' results for you!');


	var mymovies = data.movies;
	$.each(mymovies, function(index, movie) {
		$("#posterResult").append('<h2>' + movie.title + '</h2><img src="' + movie.posters.thumbnail + '"/>');
	});
}



//user clicks submit button brings down to the bottom
$('a#clickBtn').zclip({
path:'js/ZeroClipboard.swf',
copy:$('p#clipboardText').text()
});


//back to the top
jQuery(document).ready(function($){
	var offset = 300,
		//browser window scroll (in pixels) after which the "back to top" link opacity is reduced
		offset_opacity = 1200,
		//duration of the top scrolling animation (in ms)
		scroll_top_duration = 700,
		//grab the "back to top" link
		$back_to_top = $('.cd-top');

	//hide or show the "back to top" link
	$(window).scroll(function(){
		( $(this).scrollTop() > offset ) ? $back_to_top.addClass('cd-is-visible') : $back_to_top.removeClass('cd-is-visible cd-fade-out');
		if( $(this).scrollTop() > offset_opacity ) { 
			$back_to_top.addClass('cd-fade-out');
		}
	});

	//smooth scroll to top
	$back_to_top.on('click', function(event){
		event.preventDefault();
		$('body,html').animate({
			scrollTop: 0 ,
		 	}, scroll_top_duration
		);
	});

});






// //copy to clipboard function - not working
// var client = new ZeroClipboard( document.getElementById("copy-button") );

// client.on( "ready", function( readyEvent ) {
//   // alert( "ZeroClipboard SWF is ready!" );

//   client.on( "aftercopy", function( event ) {
//     // `this` === `client`
//     // `event.target` === the element that was clicked
//     event.target.style.display = "none";
//     alert("Copied text to clipboard: " + event.data["text/plain"] );
//   } );
// } );







//To bring down burger menu
//function {
//$( '.menu-btn' ).click(function(){
//$('.responsive-menu').toggleClass('expand')
// })
//})

