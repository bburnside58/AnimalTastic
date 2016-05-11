console.log("app.js is working");


var topics = ["Asteroids", "Astronomy", "Atoms", "Bill Nye", 
"Biology", "Bubbles", "Chemistry", "Computers", "Diy", "Engineering", 
"Global Warming", "Laser", "Magnets", "Mathematics", "Medicine", "Meteor", 
"Molecules", "Nebula", "Nuclear", "Physics", "Planets", "Robot", "Space", 
"Stars", "Technology"];

function renderButtons(){

		$('#sciButtons').empty();

		for (var i = 0; i < topics.length; i++) {
		
		// Note the jQUery syntax here... 
	    var b = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
	    b.addClass('buttonStyle btn'); // Added a class 
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

		alert("You added a button!")

		// We have this line so that users can hit "enter" instead of clicking on the button and it won't move to the next page
		return false;

})

$('#sciButtons').on('click', '.buttonStyle', function(){

		console.log("sciButtons working")

		//Gets data from button pressed, sets it to a variable to use in the url
	    var topic = $(this).data("name");//this is not working
        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + topic + "&api_key=dc6zaTOxFJmzC&limit=10";

        console.log(this);

        $.ajax({url: queryURL, method: 'GET'}).done(function(response){

        	console.log(response)

        	var results = response.data;

        	for (var i = 0; i < results.length; i++) {

	    		var topicDiv = $('<div>');


	            var p = $('<p>').text("Rating: " + results[i].rating);


	            var sciImage = $('<img>').attr('src', results[i].images.fixed_height_still.url);
	            //here goes still stuff!!
	           	sciImage.addClass('go'); // Added a class 
                sciImage.attr('data-still',results[i].images.fixed_height_still.url);
                sciImage.attr('data-animate', results[i].images.fixed_height.url);
                sciImage.attr('data-state', 'still');
	            /* add class to actual image for use in function to control 
	            stop / go */
	        
	            //added .url

	            //makes new div pushes(appends) paragraph tag into div
	            //then pushes(appends) image into same div
	            //does not actually go anywhere yet (not pushed to html yet) 
	            
	            topicDiv.append(p)
	            topicDiv.append(sciImage)
	            topicDiv.addClass('imgRateDiv')

	            //this is what actually pushes to the html and where it goes i.e. #gifsAppearHere id, which is the div set aside for this in the html above

	            $('#sci').prepend(topicDiv);
        	}
        })
        		$('#sci').empty();


})

// function for still images!!
$('#sci').on('click', '.go', function(){

	console.log("image click working")

    var state = $(this).attr('data-state'); 

		if ( state == 'still'){
        $(this).attr('src', $(this).data('animate'));
        $(this).attr('data-state', 'animate');
    	
    	}else{
        $(this).attr('src', $(this).data('still'));
        $(this).attr('data-state', 'still');
    	}
})

$('#clearpage').on('click', function(){

	concole.log("this button is working")

	$('#sci').empty();
})

renderButtons();
/* need for loop
make that into a function, i believe
sciButtions is the id for the button div
Jquery method create button
*/
