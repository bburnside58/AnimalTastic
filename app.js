$('button').on('click', function(){

})

var topics = ["asteroids", "astronomy", "atoms", "bill nye", "biology", "bubbles", "chemistry", "computers", "diy", "engineering", "global warming", "laser", "magnets", "mathematics", "medicine", "meteor", "molecules", "nebula", "nuclear", "physics", "planets", "robot", "space", "stars", "technology"];

function renderButtons(){
		$('#sciButtions').empty();

		for (var i = 0; i < topics.length; i++) {
		
		// Note the jQUery syntax here... 
	    var b = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
	    b.addClass('buttonStyle'); // Added a class 
	    b.attr('data-name', topics[i]); // Added a data-attribute
	    b.text(topics[i]); // Provided the initial button text
	    $('#sciButtions').append(b); // Added the button to the HTML		
	}
}


/* need for loop
make that into a function, i believe
sciButtions is the id for the button div
Jquery method create button
*/
