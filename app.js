console.log("app.js is working");


var topics = ["asteroids", "astronomy", "atoms", "bill nye", "biology", "bubbles", "chemistry", "computers", "diy", "engineering", "global warming", "laser", "magnets", "mathematics", "medicine", "meteor", "molecules", "nebula", "nuclear", "physics", "planets", "robot", "space", "stars", "technology"];

function renderButtons(){

		$('#sciButtons').empty();

		for (var i = 0; i < topics.length; i++) {
		
		// Note the jQUery syntax here... 
	    var b = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
	    b.addClass('buttonStyle'); // Added a class 
	    b.attr('data-name', topics[i]); // Added a data-attribute
	    b.text(topics[i]); // Provided the initial button text
	    $('#sciButtons').append(b); // Added the button to the HTML		
	}
};

$('#addSci').on('click', function(){

		console.log("you pressed a button!");

		// This line of code will grab the input from the textbox
		var topic = $('#sci-input').val().trim();

		// The movie from the textbox is then added to our array
		topics.push(topic);
		
		// Our array then runs which handles the processing of our movie array
		renderButtons();

		// We have this line so that users can hit "enter" instead of clicking on the button and it won't move to the next page
		return false;

})

$('#sciButtons').on('click', function(){

	console.log("sciButtons working")

	    var topic = $(this).data('topic');
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";

        console.log(this);

        $.ajax({url: queryURL, method: 'GET'})

})

renderButtons();
/* need for loop
make that into a function, i believe
sciButtions is the id for the button div
Jquery method create button
*/
